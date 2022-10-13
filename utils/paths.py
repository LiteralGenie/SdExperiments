from pathlib import Path

PROJ_DIR = Path(__file__).parent.parent
OUTPUT_DIR = PROJ_DIR / 'outputs'

for dir in [OUTPUT_DIR]:
    dir.mkdir(exist_ok=True, parents=True)
