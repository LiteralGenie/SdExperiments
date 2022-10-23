from pathlib import Path

SRC_DIR = Path(__file__).parent.parent
OUTPUT_DIR = SRC_DIR / 'outputs'
DATA_DIR = SRC_DIR / 'data'

for dir in [OUTPUT_DIR, DATA_DIR]:
    dir.mkdir(exist_ok=True, parents=True)
