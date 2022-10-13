## Setup

(For the commands below, users on Windows may need to replace `python3` with `py -3`.)

1. Grab source code: `git clone https://github.com/LiteralGenie/SdExperiments`
1. Install dependencies: `python3 -m pip install -r requirements.txt`
1. Open script in notepad or whatever. Edit values as necessary.
1. Run [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui).
    - If SD is running at an URL other than `http://localhost:7860`, you need to edit `utils/config.py`.
1. Run script: `python3 script.py`

The resulting image will be located in `outputs/` and will be updated as the script is running.
![https://github.com/LiteralGenie/SdExperiments/.readme/grid.png]