from typing import Any, Callable, Type

import PIL.Image
from PIL import ImageDraw, ImageFont
from PIL.Image import Image
from PIL.ImageFont import FreeTypeFont

from utils.config import APP_DEFAULTS
from utils.types import Color


class Cell:
    width: int
    "minimum width"

    height: int
    "minimum height"

    padding: tuple[int, int] # [horizontal, vertical]
    "influences Cell.total_width and Cell.total_height -- does not affect centering"

    border_size: tuple[int, int, int, int] # [top, right, bottom, left]
    "border size"

    border_color =tuple[Color, Color, Color, Color]
    "border color"

    def __init__(self, width: int, height: int):
        self.width = width
        self.height = height

        self.padding = [APP_DEFAULTS['padding'], APP_DEFAULTS['padding']]
        self.border_size = [0,0,0,0]
        self.border_color = [APP_DEFAULTS['border_color'],]*4

    def render(self, im: Image, x: int, y: int, width: int, height: int) -> None:
        """Draw self onto a rectangular container area in im
        
        Content will be centered within the container and contain borders / padding if configured.
        The Cell class will handle the borders. Subclasses should handle the content / padding.

        :param im:
        :param x: top-left corner of container
        :param y: top-left corner of container
        :param width: width of container
        :param height: height of container
        """
        
        # Check container size
        assert self.total_width <= width
        assert self.total_height <= height

        # Draw borders
        ctx = ImageDraw.Draw(im)
        for i, (size, color) in enumerate(zip(self.border_size, self.border_color)):
            if size <= 0: continue
            
            # Border defaults to covering container
            x0 = x
            y0 = y
            x1 = x + width
            y1 = y + height

            # Shrink border as necessary
            if i == 0:
                y1 = y + size
            elif i == 1:
                x0 = x + width - size
            elif i == 2:
                y0 = y + height - size
            elif i == 3:
                x1 = x + size

            # Draw
            ctx.rectangle([(x0, y0), (x1, y1)], fill=color)

    @property
    def total_width(self):
        border = self.border_size[1] + self.border_size[3]
        return self.width + border + self.padding[0]
    
    @property
    def total_height(self):
        border = self.border_size[0] + self.border_size[2]
        return self.height + border + self.padding[1]

class ImageCell(Cell):
    value: Image | Callable

    def __init__(self, width: int, height: int, value: Image | Callable[[], Image]):
        super().__init__(width, height)
        self.value = value
    
    def render(self, im: Image, x: int, y: int, width: int, height: int) -> None:
        super().render(im, x, y, width, height)

        # Lazy load image
        if isinstance(self.value, Callable):
            self.value = self.value()
        
        # Calculate padding values necessary for centering
        rem_width = width - self.width - self.border_size[1] - self.border_size[3]
        rem_height = height - self.height - self.border_size[0] - self.border_size[2]

        # Draw
        pos_x = x + self.border_size[3] + rem_width//2
        pos_y = y + self.border_size[0] + rem_height//2
        im.paste(self.value, box=(pos_x, pos_y))

class TextCell(Cell):
    value: str
    font: FreeTypeFont
    font_color: Color = APP_DEFAULTS['font_color']

    def __init__(self, width: int, height: int, value: str, font: FreeTypeFont):
        super().__init__(width, height)
        self.value = value
        self.font = font

    @classmethod
    def from_value(cls: Type['TextCell'], value: Any, font_file=APP_DEFAULTS['font'], font_size=APP_DEFAULTS['font_size']) -> 'TextCell':
        text = str(value)

        ctx = ImageDraw.Draw(PIL.Image.new('RGB', (9999, 9999)))


        try:
            font = ImageFont.truetype(font_file, font_size)
        except:
            print(f'Failed to load font {font_file}. Selecting default font.')
            font = ImageFont.load_default()
        
        bbox = ctx.textbbox((0,0), text=text, font=font)
        width = bbox[2] - bbox[0]
        height = bbox[3] - bbox[1]

        cell = cls(width, height, text, font)
        return cell
    
    def render(self, im: Image, x: int, y: int, width: int, height: int) -> None:
        super().render(im, x, y, width, height)

        # Size after borders are subtracting
        rem_width = width - self.border_size[1] - self.border_size[3]
        rem_height = height - self.border_size[0] - self.border_size[2]

        pos_x = x + self.border_size[3] + rem_width//2
        pos_y = y + self.border_size[0] + rem_height//2
        
        ctx = ImageDraw.Draw(im)
        ctx.text((pos_x, pos_y), self.value, font=self.font, fill=self.font_color, anchor="mm")
