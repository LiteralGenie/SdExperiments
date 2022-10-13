import time

from utils.config import APP_DEFAULTS
from utils.paths import OUTPUT_DIR
from utils.request import Request
from utils.tiler import Tiler


def main():
    samplers = [
        "Euler a",
        "LMS",
        "Heun",
        "DPM fast",
        "DPM adaptive",
    ]
    steps = [20, 100, 250]

    prompt = "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((smiling)), excited, in love, lovestruck, city, portrait"
    prompt_negative = "cropped, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, clothes, pale skin, furry, nipples, shiny, teeth, face, looking at viewer"
    seed = 1234567890
    width = 512
    height = 512

    out_file = OUTPUT_DIR / f"{time.time():.0f}.png"

    ###

    x_axis = samplers
    y_axis = steps
    divs = [None, (APP_DEFAULTS['header_div_size'], APP_DEFAULTS['header_div_color'])]

    tiler = Tiler(
        row_heights=[APP_DEFAULTS["header_cell_size"]]
        + [height + APP_DEFAULTS["padding"]] * len(y_axis),
        col_widths=[APP_DEFAULTS["header_cell_size"]]
        + [width + APP_DEFAULTS["padding"]] * len(x_axis),
        row_divs=divs,
        col_divs=divs,
    )

    # Row titles
    for i, smplr in enumerate(samplers):
        tiler.paste_text(smplr, i + 1, 0)

    # Col titles
    for i, step in enumerate(steps):
        tiler.paste_text(step, 0, i + 1)

    # Images
    for i, smplr in enumerate(samplers):
        for j, step in enumerate(steps):
            im = Request(
                sampler=smplr,
                steps=step,
                prompt=prompt,
                prompt_negative=prompt_negative,
                seed=seed,
                width=width,
                height=height,
            ).predict()

            tiler.paste_image(im, i + 1, j + 1)
            tiler.img.save(out_file, "PNG")


if __name__ == "__main__":
    main()
