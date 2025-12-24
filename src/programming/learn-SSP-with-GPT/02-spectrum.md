---
title: 02. 语音信号处理 Pycharm 实操——谱图
icon: boke
date: 2025-12-24 21:52:29
author: Ran
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

## 1. 目标

用 `scipy.signal.stft` 或 `librosa.stft` 画谱图（干净/带噪各一张）

## 2. 准备干净语料

准备干净的语音文件 `clean.wav` 放在合适的文件夹中。

![](./02-spectrum.assets/image-20251224215839290.png)

### 3. 生成噪声语料并画出谱图

安装前一天没有安装，今天又需要的包：`librosa` 。

终端输入命令 `pip install librosa` 。

分析 GPT 给出的代码。

::: tabs

@tab Part 1

```python
from pathlib import Path
import numpy as np
import librosa
import librosa.display
import soundfile as sf
import matplotlib.pyplot as plt

# ===== 路径设置 =====
ROOT = Path(__file__).resolve().parent
IN_WAV = ROOT / "clean.wav"

NOISY_WAV = ROOT / "noisy.wav"
FIG_CLEAN = ROOT / "spec_clean.png"
FIG_NOISY = ROOT / "spec_noisy.png"

if not IN_WAV.exists():
    raise FileNotFoundError(f"找不到：{IN_WAV}（cwd={Path.cwd()}）")
```

`Path(__file__).resolve().parent` 表示 **.py 文件所在的文件夹**

好处：

让程序**以脚本所在文件夹为“基准点”**去找文件。
 所以你不管：

- 用 PyCharm 跑

- 用 VS Code 跑

- 直接在 CMD / PowerShell 跑

- 甚至从别的目录跑

    > 在终端里如果这样跑：
    >
    > ```
    > cd /d D:\document
    > python speech_processing\speech_day2\make_noisy_and_specs.py
    > ```
    >
    > - **cwd = D:\document**
    > - Day1 写法会去 `D:\document\clean.wav` 找（当然找不到）
    > - 脚本目录写法会去 `D:\...\speech_day2\clean.wav` 找（能找到）

只要你的音频文件**确实放在脚本同一个目录**，一般就不会出现“因为运行目录不同导致找不到文件”。

---

**与前一天代码对比：**

```python
# ====== 输入文件 ======
INPUT_WAV = "input.wav"     # 输入音频的文件名
TARGET_SR = 16000           # 统一采样率到 16k
# ========================

out_dir = Path(".")                          
wav_in = Path(INPUT_WAV)              
```

`Path("xxx.wav")`：相对 **cwd** 当前工作路径，因此会到当前工作路径下找文件。

同理，输出文件位置 `Path(".")` 也是当前工作路径。

因此一旦当前工作路径和文件所在文件路径不匹配，则容易出现问题。



@tab Part 2

```python
# ===== Step A：读取 clean，并统一采样率 =====
SR = 16000
y, sr = librosa.load(str(IN_WAV), sr=SR, mono=True)
print("Loaded:", IN_WAV, "len:", len(y), "sr:", sr)
```

**`SR = 16000` ：** 先设定“目标采样率”为 16k。后面读入时会按这个来。

**`y, sr = librosa.load(str(IN_WAV), sr=SR, mono=True)` ：** 

这行做了三件事：

1. **从 IN_WAV 读音频**（IN_WAV 是文件路径）
2. `mono=True`：把音频变成**单声道**
    - 如果原来是双声道，librosa 会把左右声道做平均/合并
3. `sr=SR`：把音频**重采样到 16k**
    - 如果原来不是 16k（比如 44.1k），librosa 会自动 resample
    - 如果原来就是 16k，它就不改

返回值：

- `y`：一维 numpy 数组（波形，浮点数，通常范围在 [-1,1]）
- `sr`：实际返回的采样率（因为你传了 `sr=16000`，所以基本就是 16000）

**`print("Loaded:", IN_WAV, "len:", len(y), "sr:", sr)` ：** 

打印确认：读到了哪个文件、样本点数是多少、采样率是多少。 `len(y)` 是“采样点数”，如果想看“秒数”可以再算：`len(y)/sr` 。



@tab Part 3

```python
# ===== Step B：按目标 SNR 加白噪声 =====
def add_white_noise_to_snr(clean: np.ndarray, snr_db: float, seed: int = 0):
    rng = np.random.default_rng(seed)
    noise = rng.standard_normal(size=clean.shape)

    p_sig = np.mean(clean**2) + 1e-12
    p_noise = np.mean(noise**2) + 1e-12

    scale = np.sqrt(p_sig / (p_noise * (10 ** (snr_db / 10))))
    noisy = clean + noise * scale

    # 防削波：超过[-1,1]就整体缩放
    peak = np.max(np.abs(noisy))
    if peak > 0.99:
        noisy = noisy / peak * 0.99

    return noisy.astype(np.float32)

TARGET_SNR_DB = 5.0  # 0更吵，10更干净
noisy = add_white_noise_to_snr(y, TARGET_SNR_DB, seed=0)

sf.write(str(NOISY_WAV), noisy, SR)
print("Saved:", NOISY_WAV)

```

**给 clean 波形加一段白噪声，并把噪声强度调到你指定的 SNR（比如 5 dB）**，然后把合成后的 `noisy.wav` 保存出来。

**`def add_white_noise_to_snr(clean: np.ndarray, snr_db: float, seed: int = 0):` ：**

定义一个函数：输入干净语音 `clean`、目标 `snr_db`，输出带噪语音。

`np.ndarray` 指的是 **NumPy 的数组类型**（n-dimensional array，n 维数组）

`seed` 是随机种子：让你每次运行得到同一段噪声，方便复现实验。

> ### 1）seed 在代码里到底控制了什么？
>
> ```
> rng = np.random.default_rng(seed)
> noise = rng.standard_normal(size=clean.shape)
> ```
>
> - `default_rng(seed)`：用 seed 初始化一个随机数生成器
> - `standard_normal(...)`：从这个生成器里抽样，生成噪声
>
> 所以 **seed 直接决定了 noise 长什么样**（哪一串随机数）。
>
> ------
>
> ### 2）常见 4 种使用场景
>
> #### 情况 A：固定 seed
>
> 目的：每次运行结果一致，方便你判断“代码改动带来的变化”。
>
> 做法：
>
> ```
> seed = 0  # 固定
> ```
>
> 改 STFT 参数/画图参数时，噪声不变，变化就只来自你的改动。
>
> ------
>
> #### 情况 B：要做“稳健结果”（论文实验更严谨）
>
> 目的：结果不依赖某一条噪声的“运气”，而是对多个随机噪声平均。
>
> 做法：跑多个 seed，取平均/方差：
>
> ```
> seeds = [0, 1, 2, 3, 4]
> for s in seeds:
>     noisy = add_white_noise_to_snr(clean, 5.0, seed=s)
>     # 跑算法 -> 算指标 -> 记录
> ```
>
> 最后汇报：平均提升多少 dB、标准差多少（哪怕只做 3 个 seed 也比 1 个强）。
>
> ------
>
> #### 情况 C：要“每次都生成不同 noisy”（不想重复）
>
> 目的：每次运行都想得到新的噪声样本。
>
> 做法 1：用时间相关的随机种子（最简单：不传 seed）
>  在 NumPy 里你可以让它自动用系统熵初始化：
>
> ```
> rng = np.random.default_rng()  # 不给seed
> ```
>
> 对应此处的函数，可以把 seed 默认值改成 `None`：
>
> ```
> def add_white_noise_to_snr(clean, snr_db, seed=None):
>     rng = np.random.default_rng(seed)
> ```
>
> - `seed=None` → 每次噪声都不一样（更“随机”）
>
> 做法 2：手动换 seed（更可控）
>  比如用当前日期/实验编号：
>
> ```
> seed = 20251224
> ```
>
> ------
>
> #### 情况 D：想“可复现 + 可追踪”（最像论文工程）
>
> 目的：既能生成不同 noisy，又能以后完全复现同一个 noisy。
>
> 做法：把 seed 写进文件名/日志：
>
> - `noisy_snr5_seed0.wav`
> - `noisy_snr5_seed1.wav`
>
> 这样“这张图对应哪条 noisy”，就能立刻复现。
>
> ------
>
> ### 3）几个可能会踩的坑
>
> #### 坑 1：同 seed ≠ 同结果（如果改了 noise 的长度）
>
> 同一个 seed 生成的是“随机序列”，但你取多少个点会影响结果：
>
> - 音频长度变了（更长/更短）
> - `size=clean.shape` 就变了
>      → 得到的噪声也会不同（因为截取的序列长度不一样）
>
> 所以做“严格对比”时，**输入长度最好固定**。
>
> ------
>
> #### 坑 2：同 seed 在不同库/不同算法里不一定完全一致
>
> 现在用的是 NumPy 的 `default_rng`，它在 NumPy 内部是稳定的。
>  但如果你换成别的库的随机数（Python `random`、PyTorch、TF），seed 机制不通用。

**`rng = np.random.default_rng(seed)` ：**
创建一个随机数生成器对象 rng。

`default_rng` 是 `Numpy` 推荐的新接口，比老的 `np.random.seed()` 更好用、更可控。

seed 一样 → 生成的随机序列就一样。

---

**`noise = rng.standard_normal(size=clean.shape)` ：**
生成一段噪声数组 noise，长度和 clean 完全一致。

`standard_normal` 生成的是 高斯噪声：均值 0、标准差 1。

之所以叫“白噪声”：它的频谱在各频率上（理想情况下）平均分布，不偏向某个频段。

此时的 noise 强度是“默认的”，跟你的 clean 的强度没关系，所以还不能直接加。

---

**`p_sig = np.mean(clean**2) + 1e-12` ：**
这行在算干净语音的平均功率（power）。

clean**2：每个采样点平方（类似能量）

np.mean(...)：对整段取平均，得到“每个采样点平均能量”，在信号处理中常用作功率估计。

+ 1e-12：避免极端情况下 clean 全是 0 导致后面除 0。

你可以把 p_sig 理解成：这段语音整体有多“响”（更准确说是平均能量大小）。

---

**`p_noise = np.mean(noise**2) + 1e-12` ：**

同理，这行算的是刚生成的那段噪声的平均功率。

因为 noise 是标准高斯，理论上它功率大约接近 1，但实际会有波动，所以这里也算一下更稳。

---









:::

```python



# ===== Step C：STFT -> dB（两张图统一参考，保证可比）=====
N_FFT = 512
WIN_LENGTH = 400   # 25ms @ 16k
HOP_LENGTH = 160   # 10ms @ 16k
WINDOW = "hann"

def stft_mag(x):
    D = librosa.stft(x, n_fft=N_FFT, hop_length=HOP_LENGTH,
                     win_length=WIN_LENGTH, window=WINDOW)
    return np.abs(D)

S_clean = stft_mag(y)
S_noisy = stft_mag(noisy)

# 关键：两张图用同一个 ref（用 clean 的最大值）
ref = np.max(S_clean) + 1e-12
S_clean_db = librosa.amplitude_to_db(S_clean, ref=ref)
S_noisy_db = librosa.amplitude_to_db(S_noisy, ref=ref)

VMIN, VMAX = -80, 0

plt.figure()
librosa.display.specshow(S_clean_db, sr=SR, hop_length=HOP_LENGTH,
                         x_axis="time", y_axis="linear", vmin=VMIN, vmax=VMAX)
plt.colorbar(format="%+2.0f dB")
plt.title("CLEAN Spectrogram")
plt.tight_layout()
plt.savefig(str(FIG_CLEAN), dpi=200)
plt.close()
print("Saved:", FIG_CLEAN)

plt.figure()
librosa.display.specshow(S_noisy_db, sr=SR, hop_length=HOP_LENGTH,
                         x_axis="time", y_axis="linear", vmin=VMIN, vmax=VMAX)
plt.colorbar(format="%+2.0f dB")
plt.title(f"NOISY Spectrogram (SNR={TARGET_SNR_DB} dB)")
plt.tight_layout()
plt.savefig

```



