import time
from typing import Any, Callable

from utils.cell import Cell, ImageCell, TextCell
from utils.config import APP_DEFAULTS
from utils.misc import line_break_soft
from utils.paths import OUTPUT_DIR
from utils.request import Request
from utils.tiler import Tiler

"""
Generates a grid of SD outputs.

---

Examples of things you can copy-paste under x_axis and y_axis:

'sampler',
[
    "Euler a",
    "Euler",
    "LMS",
    # "Heun",
    "DPM2",
    # "DPM2 a",
    # "DPM fast",
    # "DPM adaptive",
    # "LMS Karras",
    "DPM2 Karras",
    # "DPM2 a Karras",
    # "DDIM",
    # "PLMS",
]

'steps',
[1, 3, 20]

'cfg',
[1, 5, 10, 15]

'resolution',
[
    # (width, height)
    (256,768),
    (768, 768),
    (1536, 768),
    (2048, 768)
]

'prompt_full',
[   
    (
        "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((happy)), excited, in love, lovestruck, city, portrait",
        ""
    ),
    (
        "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((happy)), excited, in love, lovestruck, city, portrait",
        "cropped, lowres, bad anatomy, bad hands,"
    ),
    (
        "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((happy)), excited, in love, lovestruck, city, portrait",
        "signature, watermark, username, blurry, artist name, clothes"
    ),
    (
        "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((happy)), excited, in love, lovestruck, city, portrait",
        "worst quality, low quality, normal quality, jpeg artifacts"
    ),
    (
        "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((happy)), excited, in love, lovestruck, city, portrait",
        "cropped, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, clothes, pale skin, furry, shiny, teeth, face, looking at viewer"
    ),
]

'prompt_positive_partial',
[
    "detailed",
    "((detailed))",
    "masterpiece",
    "((masterpiece))",
    "intricate",
    "((intricate))",
]

'prompt_negative',
[
    "normal quality",
    "((normal quality))",
    "low quality",
    "((low quality))",
    "worst quality",
    "((worst quality))",
    "jpeg artifacts",
    "((jpeg artifacts))",
]

'seed',
[
    651561, 561651, 56165156, 561654874, 789, 54654, 1565, 156163, 51651, 87489, 847946 ,56151 ,561321
]

"""


def main():
    x_axis = [
        "prompt_positive_partial",
        [
            "hair bun, braids",
            "braids, hair bun",
            "braided hair bun",
            "hair with bun and braids",
            "braids, bun",
        ],
    ]

    y_axis = ["cfg", [123, 4321, 12345, 654321, 1234567, 87654321, 123456789]]

    prompt = "girl, ash blonde, violet eyes, black school uniform"
    prompt_negative = "worst quality, jpeg artifacts, cropped"
    steps = 30
    seed = 1234567
    width = 512
    height = 512
    use_cache = True

    out_file = OUTPUT_DIR / f"{time.time():.0f}_{x_axis[0]}_vs_{y_axis[0]}.png"

    ###

    cells: list[list[Cell]] = []
    y_modifier, y_stringify = get_modifier(y_axis[0])
    x_modifier, x_stringify = get_modifier(x_axis[0])

    # Col titles
    col_headers = [Cell(1, 1)]
    for value in x_axis[1]:
        label = x_stringify(value)
        cell = TextCell.from_value(label)
        col_headers.append(cell)
    cells.append(col_headers)

    # Row titles
    for value in y_axis[1]:
        label = y_stringify(value)
        cell = TextCell.from_value(label)
        cells.append([cell])

    # Image cells
    for y, y_value in enumerate(y_axis[1], 1):
        row = cells[y]

        for x_value in x_axis[1]:
            request = Request(
                prompt=prompt,
                prompt_negative=prompt_negative,
                steps=steps,
                seed=seed,
                width=width,
                height=height,
            )

            request = y_modifier(request, y_value)
            request = x_modifier(request, x_value)

            # request=request is because loops don't create closures
            cell = ImageCell(
                request.width,
                request.height,
                lambda request=request: request.execute(check_cache=use_cache),
            )
            row.append(cell)

    # Add border to column headers
    for cell in cells[0]:
        cell.border_size[2] = APP_DEFAULTS["border_size"]
        cell.padding = [APP_DEFAULTS["header_padding"], APP_DEFAULTS["header_padding"]]

    # Add border to row headers
    for row in cells:
        row[0].border_size[1] = APP_DEFAULTS["border_size"]
        row[0].padding = [
            APP_DEFAULTS["header_padding"],
            APP_DEFAULTS["header_padding"],
        ]

    # Render
    tiler = Tiler(cells)
    tiler.render(out_file)


def get_modifier(
    axis_type: str,
) -> tuple[Callable[[Request, Any], Request], Callable[[Any], str]]:
    """Returns two functions, one that returns the track name, and one that returns a modified request

    For example, given axis_type='resolution'...
      - the first callable will stringify a resolution (eg (100,500) -> '100x500')
      - the second callable will update Request.width and Request.height
    """

    axis_type = axis_type.lower()
    VALUE_TYPES = [
        "sampler",
        "steps",
        "cfg",
        "resolution",
        "seed",
        "prompt_full",
        "prompt_positive",
        "prompt_negative",
        "prompt_positive_partial",
        "prompt_negative_partial",
    ]
    assert (
        axis_type in VALUE_TYPES
    ), f'Invalid axis type: {axis_type}. Must be one of [{", ".join(VALUE_TYPES)}]'

    if axis_type == "sampler":

        def stringify(sampler: str) -> str:
            return sampler

        def modifier(request: Request, sampler: str) -> Request:
            request.sampler = sampler
            return request

    elif axis_type == "steps":

        def stringify(steps: int) -> str:
            return f"{steps} steps"

        def modifier(request: Request, steps: int) -> Request:
            request.steps = steps
            return request

    elif axis_type == "cfg":

        def stringify(cfg_scale: float) -> str:
            return f"CFG {cfg_scale}"

        def modifier(request: Request, cfg_scale: float) -> Request:
            request.cfg_scale = cfg_scale
            return request

    elif axis_type == "resolution":

        def stringify(resolution: tuple[int, int]) -> str:
            return f"{resolution[0]}x{resolution[1]}"

        def modifier(request: Request, resolution: tuple[int, int]) -> Request:
            request.width = resolution[0]
            request.height = resolution[1]
            return request

    elif axis_type == "seed":

        def stringify(seed: int) -> str:
            return str(seed)

        def modifier(request: Request, seed: int) -> Request:
            request.seed = seed
            return request

    elif axis_type == "prompt_full":

        def stringify(lst: tuple[str, str]) -> str:
            prompt, prompt_negative = lst
            prompt = line_break_soft(prompt)
            prompt_negative = line_break_soft(prompt_negative)
            div = "\n--------\n"
            return f"POSITIVE{div}{prompt}\n\nNEGATIVE{div}{prompt_negative}\n--------------------"

        def modifier(request: Request, lst: tuple[str, str]) -> Request:
            request.prompt = lst[0]
            request.prompt_negative = lst[1]
            return request

    elif axis_type == "prompt_positive":

        def stringify(prompt: str) -> str:
            prompt = line_break_soft(prompt)
            return f"POSITIVE\n{prompt}"

        def modifier(request: Request, prompt: str) -> Request:
            request.prompt = prompt
            return request

    elif axis_type == "prompt_negative":

        def stringify(prompt_negative: str) -> str:
            prompt_negative = line_break_soft(prompt_negative)
            return f"NEGATIVE\n{prompt_negative}"

        def modifier(request: Request, prompt_negative: str) -> Request:
            request.prompt_negative = prompt_negative
            return request

    elif axis_type == "prompt_positive_partial":

        def stringify(prompt: str) -> str:
            prompt = line_break_soft(prompt)
            return f"POSITIVE\n{prompt}"

        def modifier(request: Request, prompt: str) -> Request:
            request.prompt = prompt.strip() + ", " + request.prompt.strip()
            return request

    elif axis_type == "prompt_negative_partial":

        def stringify(prompt_negative: str) -> str:
            prompt_negative = line_break_soft(prompt_negative)
            return f"NEGATIVE\n{prompt_negative}"

        def modifier(request: Request, prompt_negative: str) -> Request:
            request.prompt_negative = (
                prompt_negative.strip() + ", " + request.prompt_negative.strip()
            )
            return request

    return modifier, stringify


if __name__ == "__main__":
    main()
