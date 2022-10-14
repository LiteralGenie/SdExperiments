## Setup

(For the commands below, users on Windows may need to replace `python3` with `py -3`.)

1. Download repo: `git clone https://github.com/LiteralGenie/SdExperiments`
1. Navigate to repo folder: `cd ./SdExperiments`
1. Install dependencies: `python3 -m pip install -r requirements.txt`
1. Open `src/main.py` in notepad or whatever. Edit values as necessary.
1. Run [Stable Diffusion](https://github.com/AUTOMATIC1111/stable-diffusion-webui).
    - If SD is running at an URL other than `http://localhost:7860`, you need to edit `src/utils/config.py`.
1. Run script: `python3 src/main.py`

The resulting image will be located in `outputs/` and will be updated as the script is running.
<img width="80%" src="https://raw.githubusercontent.com/LiteralGenie/SdExperiments/master/.readme/grid.png" alt="sampler vs steps">


## TODO

- [x] Make Ttiler easier to init. It's kinda ugly with the `APP_DEFAULTS` stuff.
- [ ] Allow resuming of runs
- [x] Prompt axis
- [ ] Axis for "high-resolution fix"
- [ ] Embedded png info
- [ ] Large cells
- [ ] Cache