import sqlite3

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from loguru import logger

from utils import paths
from utils.request import Request

DB = lambda: sqlite3.connect(paths.DATA_DIR / "im_cache.sqlite")

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/generate")
async def generate(data: dict):
    request = Request(**data["parameters"])

    if data.get("only_cache"):
        result = request.from_db()
        if not result:
            return None
    else:
        request.execute()
        result = request.from_db()
        if not result:
            return HTTPException(500, "Image generation failed")

    return "data:image/png;base64," + result


# Serve UI files
app.mount("/", StaticFiles(directory=paths.DATA_DIR / "webui", html=True), app)

if __name__ == "__main__":
    uvicorn.run("run_server:app", host="0.0.0.0", port=8860, reload=True)
