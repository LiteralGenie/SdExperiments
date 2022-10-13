from dataclasses import dataclass, field

import PIL.Image
from PIL import ImageDraw, ImageFont
from PIL.Image import Image

from utils.config import APP_DEFAULTS

Color = tuple[int, int, int]
Size = float


@dataclass
class Tiler:
    row_heights: list[Size]
    col_widths: list[Size]

    # first / last items are outer borders, second is divider that follows header
    # (last means len(row_heights))
    row_divs: list[tuple[Size, Color] | None] = field(default_factory=list)
    col_divs: list[tuple[Size, Color] | None] = field(default_factory=list)

    img: Image = None

    bg_color: Color = (200, 200, 200)

    def __post_init__(self):
        # Create image
        width = sum(self.col_widths) + sum(x[0] for x in self.col_divs if x)
        height = sum(self.row_heights) + sum(x[0] for x in self.row_divs if x)
        self.img = PIL.Image.new("RGB", (width, height), color=self.bg_color)

        # Draw row divs
        ctx = ImageDraw.Draw(self.img)
        for i in range(len(self.row_divs)):
            if div := self.row_divs[i]:
                pos_y = self._get_pos(0, i, include_cell_div=False)[1]
                ctx.rectangle(
                    [(0, pos_y), (width, pos_y + div[0])],
                    fill=div[1],
                )

        # Draw col divs
        ctx = ImageDraw.Draw(self.img)
        for i in range(len(self.col_divs)):
            if div := self.col_divs[i]:
                pos_x = self._get_pos(i, 0, include_cell_div=False)[0]
                ctx.rectangle(
                    [(pos_x, 0), (pos_x + div[0], height)],
                    fill=div[1],
                )

    def paste_image(self, im: Image, row: int, col: int) -> None:
        # Check im size
        im_sz = im.size
        sz = self._get_cell_size(row, col)
        assert im_sz[0] <= sz[0]
        assert im_sz[1] <= sz[1]

        # Center image
        padding_horiz = (sz[0] - im_sz[0]) // 2
        padding_vert = (sz[1] - im_sz[1]) // 2

        # Draw
        pos = list(self._get_pos(row, col))
        pos[0] += padding_horiz
        pos[1] += padding_vert
        self.img.paste(im, box=pos)

    def paste_text(
        self, text: str, row: int, col: int, color=(0, 0, 0), size=APP_DEFAULTS['header_font_size']
    ) -> None:
        text = str(text)

        pos = self._get_pos(row, col)
        sz = self._get_cell_size(row, col)
        anchor_pos = (pos[0] + sz[0] / 2, pos[1] + sz[1] / 2)

        font = ImageFont.truetype("Pillow/Tests/fonts/FreeMono.ttf", size)

        ctx = ImageDraw.Draw(self.img)
        ctx.text(anchor_pos, text, font=font, fill=color, anchor="mm")

    def _get_pos(
        self, row: int, col: int, include_cell_div=True
    ) -> tuple[float, float]:
        "Get top-left corner of cell (x,y) from (row, col) index"
        assert row < len(self.col_widths)
        assert col < len(self.row_heights)

        pos_x = 0
        for i in range(row + 1):
            # For all but last...
            if i != row:
                pos_x += self.col_widths[i]

                if i < len(self.col_divs) and (div := self.col_divs[i]):
                    pos_x += div[0]
            else:
                # If drawing border, we don't want to include the border in position calculation
                if include_cell_div:
                    if i < len(self.col_divs) and (div := self.col_divs[i]):
                        pos_x += div[0]

        pos_y = 0
        for i in range(col + 1):
            # For all but last...
            if i != col:
                pos_y += self.row_heights[i]

                if i < len(self.row_divs) and (div := self.row_divs[i]):
                    pos_y += div[0]
            else:
                # If drawing border, we don't want to include the border in position calculation
                if include_cell_div:
                    if i < len(self.row_divs) and (div := self.row_divs[i]):
                        pos_y += div[0]

        return (pos_x, pos_y)

    def _get_cell_size(self, row: int, col: int) -> tuple[float, float]:
        "Get size (width, height) of cell at index (row, col)"
        return (self.col_widths[row], self.row_heights[col])
