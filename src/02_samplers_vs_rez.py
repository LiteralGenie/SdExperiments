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
    resolutions = [(256,768), (512, 768), (768, 768), (1088, 768), (1216, 768), (1536, 768), (1728, 768), (2048, 768)] # (width, height)

    prompt = "masterpiece, best quality, girl, black hair, (brown streaks), (white parka), (ripped jeans), standing, outside, ((smiling)), excited, in love, lovestruck, city, portrait"
    prompt_negative = "cropped, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, username, blurry, artist name, clothes, pale skin, furry, nipples, shiny, teeth, face, looking at viewer"
    steps = 40
    seed = 1234567890

    out_file = OUTPUT_DIR / f"{time.time():.0f}.png"

    ###

    x_axis = samplers
    y_axis = resolutions
    divs = [None, (APP_DEFAULTS['header_div_size'], APP_DEFAULTS['header_div_color'])]

    tiler = Tiler(
        row_heights=[APP_DEFAULTS["header_cell_size"]]
        + [rez[1] + APP_DEFAULTS["padding"] for rez in resolutions],
        col_widths=[APP_DEFAULTS["header_cell_size"] * 3]
        + [max(rez[0] for rez in resolutions) + APP_DEFAULTS["padding"]] * len(resolutions),
        row_divs=divs,
        col_divs=divs,
    )

    # Row titles
    for i, title in enumerate(y_axis):
        tiler.paste_text(title, 0, i + 1)

    # Col titles
    for i, title in enumerate(x_axis):
        tiler.paste_text(title, i + 1, 0)

    # Images
    for i, smplr in enumerate(x_axis):
        for j, rez in enumerate(y_axis):
            im = Request(
                sampler=smplr,
                steps=steps,
                prompt=prompt,
                prompt_negative=prompt_negative,
                seed=seed,
                width=rez[0],
                height=rez[1],
            ).predict()

            tiler.paste_image(im, i + 1, j + 1)
            tiler.img.save(out_file, "PNG")


if __name__ == "__main__":
    main()
