from dataclasses import dataclass, field
from pathlib import Path

import PIL.Image
from PIL.Image import Image

from utils.cell import Cell
from utils.config import APP_DEFAULTS
from utils.types import Color


class Tiler:
    cells: list[list[Cell]]
    bg_color: Color = APP_DEFAULTS['background_color']

    def __init__(self, cells: list[list[Cell | None]]):
        # Check for jagged rows
        assert all(len(lst) == len(cells[0]) for lst in cells)
        self.cells = cells

        # Fix empty cells
        for i, row in enumerate(self.cells):
            self.cells[i] = [x or Cell(1,1) for x in row]
        
    def render(self, out_file: Path) -> Image:
        # Calculate track sizes (ie row height / col width) using largest cell from each track
        row_heights = []
        for row in self.cells:
            max_height = max(c.total_height for c in row)
            row_heights.append(max_height)
        
        col_widths = []
        for i in range(len(self.cells[0])):
            max_width = max(row[i].total_width for row in self.cells)
            col_widths.append(max_width)

        # Create image
        total_width = sum(col_widths)
        total_height = sum(row_heights)
        im = PIL.Image.new('RGB', (total_width, total_height), color=self.bg_color)

        # Render cells
        pos_x = pos_y = 0
        for i, height in enumerate(row_heights):
            for cell, width in zip(self.cells[i], col_widths):
                cell.render(im, pos_x, pos_y, width, height)
                im.save(out_file, 'PNG')

                pos_x += width
            pos_x = 0
            pos_y += height

        return im
