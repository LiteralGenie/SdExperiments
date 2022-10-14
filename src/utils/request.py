import base64
from dataclasses import dataclass, field
from io import BytesIO
from typing import Literal
from PIL.Image import Image
import PIL.Image

import requests

from utils.config import SD_URL


@dataclass
class Request:
    fn_index: int = 13
    session_hash: str = "czvtj8n71w"

    prompt: str = ""
    prompt_negative: str = ""
    style_1: str = "None"
    style_2: str = "None"
    steps: int = 20
    sampler: Literal[
        "Euler a",
        "Euler",
        "LMS",
        "Heun",
        "DPM2",
        "DPM2 a",
        "DPM fast",
        "DPM adaptive",
        "LMS Karras",
        "DPM2 Karras",
        "DPM2 a Karras",
        "DDIM",
        "PLMS",
    ] = "Euler a"
    restore_faces: bool = False
    tiling: bool = False
    batch_count: int = 1
    batch_size: int = 1
    cfg_scale: float = 7
    seed: int = -1
    variation_seed: int = -1
    variation_strength: float = 0
    variation_height: int = 0
    variation_width: int = 0
    extras: bool = False
    height: int = 512
    width: int = 512
    highres_fix = False
    denoising_strength = 0.7
    first_pass_width = 512
    first_pass_height = 512
    _rest: list = field(
        default_factory=lambda: [
            "None",
            False,
            False,
            None,
            "",
            "Seed",
            "",
            "Nothing",
            "",
            True,
            False,
            False,
            None,
            "",
            "",
        ]
    )

    @property
    def payload(self):
        self.validate()

        return dict(
            fn_index=self.fn_index,
            session_hash=self.session_hash,
            data=[
                self.prompt,
                self.prompt_negative,
                self.style_1,
                self.style_2,
                self.steps,
                self.sampler,
                self.restore_faces,
                self.tiling,
                self.batch_count,
                self.batch_size,
                self.cfg_scale,
                self.seed,
                self.variation_seed,
                self.variation_strength,
                self.variation_height,
                self.variation_width,
                self.extras,
                self.height,
                self.width,
                self.highres_fix,
                self.denoising_strength,
                self.first_pass_width,
                self.first_pass_height,
                *self._rest,
            ],
        )

    def execute(self) -> Image:
        # Generate image
        response = requests.post(SD_URL + "/api/predict", json=self.payload)
        response = response.json()
        assert 'error' not in response, response

        # Get image data
        im_b64 = response["data"][0][0].replace("data:image/png;base64,", "")
        im_bytes = BytesIO(base64.b64decode(im_b64))
        im = PIL.Image.open(im_bytes)
        return im

    def validate(self) -> None:
        assert self.sampler in [
            "Euler a",
            "Euler",
            "LMS",
            "Heun",
            "DPM2",
            "DPM2 a",
            "DPM fast",
            "DPM adaptive",
            "LMS Karras",
            "DPM2 Karras",
            "DPM2 a Karras",
            "DDIM",
            "PLMS",
        ], f'Invalid sampler: {self.sampler}'

    def __post_init__(self):
        self.validate()
