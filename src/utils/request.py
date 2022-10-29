import base64
from dataclasses import dataclass, field
from io import BytesIO
import json
import sqlite3
from typing import Literal
from PIL.Image import Image
import PIL.Image

import requests

from utils.config import SD_URL
from utils import paths

DB = lambda: sqlite3.connect(paths.DATA_DIR / "im_cache.sqlite")


@dataclass
class Request:
    fn_index: int = 50
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
    first_pass_width = 0
    first_pass_height = 0
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

    def execute(self, check_cache=True) -> Image:
        payload = self.payload

        # Check cache
        if check_cache and (im_b64 := self.from_db()):
            im_bytes = BytesIO(base64.b64decode(im_b64))
            img = PIL.Image.open(im_bytes)
            return img

        # Generate image
        response = requests.post(SD_URL + "/api/predict", json=payload)
        response = response.json()
        assert "error" not in response, dict(request=payload, response=response)

        # Get image data
        data = response["data"][0][0]
        if isinstance(data, str):
            im_b64 = data.replace("data:image/png;base64,", "")
            im_bytes = BytesIO(base64.b64decode(im_b64))
            img = PIL.Image.open(im_bytes)
        else:
            im_b64 = None
            img = PIL.Image.open(data["name"])

        # Update cache
        if im_b64 is None:
            im_bytes = BytesIO()
            img.save(im_bytes, format="PNG")
            im_b64 = base64.b64encode(im_bytes.getvalue()).decode("utf-8")

        with DB() as conn:
            db_key = json.dumps(self.payload)
            conn.execute(
                """
                INSERT OR REPLACE INTO im_cache VALUES (
                    ?, ?
                )
            """,
                (db_key, im_b64),
            )

        return img

    def from_db(self) -> str:
        with DB() as conn:
            db_key = json.dumps(self.payload)
            result = conn.execute(
                """
                SELECT data FROM im_cache
                WHERE id = ?
            """,
                (db_key,),
            ).fetchone()

        return result[0] if result else None

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
        ], f"Invalid sampler: {self.sampler}"

    def __post_init__(self):
        self.validate()

        with DB() as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS im_cache (
                    id      TEXT        NOT NULL,
                    data    TEXT        NOT NULL,        --base64 image data
                    PRIMARY KEY (id)
                )
            """
            )
