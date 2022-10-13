from pathlib import Path

SRC_DIR = Path(__file__).parent.parent
OUTPUT_DIR = SRC_DIR / 'outputs'

for dir in [OUTPUT_DIR]:
    dir.mkdir(exist_ok=True, parents=True)
