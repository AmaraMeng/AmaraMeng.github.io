---
title: 01. 基于EEG的卷积神经网络听觉注意力定位检测
icon: boke
date: 2025-11-23 11:39:12
author: Ran
category:
    - reading
    - literature
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

**EEG-based detection of the locus of auditory attention with convolutional neural networks**

![题目及作者](./01-EEG-based-detection-of-the-locus-of-auditory-attention-with-convolutional-neural-networks.assets/image-20251123114219611.png)

## 摘要

In a multi-speaker scenario, the human auditory system is able to attend to one particular speaker of interest and ignore the others. It has been demonstrated that it is possible to use electroencephalography (EEG) signals to infer to which speaker someone is attending by relating the neural activity to the speech signals. However, classifying auditory attention within a short time interval remains the main challenge. We present a convolutional neural network-based approach to extract the locus of auditory attention (left/right) without knowledge of the speech envelopes. Our results show that it is possible to decode the locus of attention within 1–2 s, with a median accuracy of around 81%. These results are promising for neuro-steered noise suppression in hearing aids, in particular in scenarios where per-speaker envelopes are unavailable.

在多说话者场景中，人类的听觉系统能够专注于某个感兴趣的特定说话者并忽略其他人。研究表明，通过将神经活动与语音信号关联，可以利用脑电（EEG）信号推断听者正在关注哪位说话者。然而，在短时间隔内对听觉注意进行分类仍然是主要挑战。我们提出了一种基于卷积神经网络的方法，用来提取听觉注意的位置（左/右），且无需语音包络。结果显示，在1–2秒内解码注意位置是可行的，准确率约为81%。这些结果在助听设备中神经引导噪声抑制方面具有前景，尤其是在无法获取每位说话者语音包络的情况下。



## 1. Introduction

- **现象：**

    cocktail party problem 鸡尾酒会问题 （Cherry EC. 1953. Some experiments on the recognition of speech, with one and with two ears. The Journal of the Acoustical Society of America 25:975–979. DOI: https://doi.org/10.1121/1.1907229）

- **涉及人群：**

    听力损失人群和老年人更难分辨。

- **问题：**

    助听设备现有的策略是根据说话人音量或者听者面对的方向，应用效果不佳。

- **解决方法：**

    auditory attention decoding (AAD) 听觉注意力解码：神经活动   →解码   听觉注意

### 1.1 线性解码 VS 非线性解码问题

**线性解码** 

- **常见方法：**

    step 1: 刺激重建（用大脑活动解码并重建刺激语音的包络）;

    step 2：相关性分析（将重建的包络与原始刺激包络进行相关分析，相关性最高的那个包络属于所关注的说话者。）

    (O’Sullivan JA, Power AJ, Mesgarani N, Rajaram S, Foxe JJ, Shinn-Cunningham BG, Slaney M, Shamma SA, Lalor EC. 2015. Attentional selection in a cocktail party environment can be decoded from Single-Trial EEG. Cerebral Cortex 25:1697–1706. DOI: https://doi.org/10.1093/cercor/bht355, PMID: 24429136)

    ( Pasley BN, David SV, Mesgarani N, Flinker A, Shamma SA, Crone NE, Knight RT, Chang EF. 2012. Reconstructing speech from human auditory cortex. PLOS Biology 10:e1001251. DOI: https://doi.org/10.1371/ journal.pbio.1001251, PMID: 22303281)

- **其他方法：**

    forward modeling approach; 

    predicting EEG from the auditory stimulus;

    ( Akram S, Presacco A, Simon JZ, Shamma SA, Babadi B. 2016. Robust decoding of selective auditory attention from MEG in a competing-speaker environment via state-space modeling. NeuroImage 124:906–917. DOI: https://doi.org/10.1016/j.neuroimage.2015.09.048, PMID: 26436490) 

    (Alickovic E, Lunner T, Gustafsson F. 2016. A system identification approach to determining listening attention from EEG signals. 24th European Signal Processing Conference (EUSIPCO) 31–35.)

    canonical correlation analysis (CCA)-based methods;

    ( de Cheveigne´ A, Wong DDE, Di Liberto GM, Hjortkjær J, Slaney M, Lalor E. 2018. Decoding the auditory brain with canonical component analysis. NeuroImage 172:206–216. DOI: https://doi.org/10.1016/j.neuroimage. 2018.01.033, PMID: 29378317)

    Bayesian state-space modeling.

    ( Miran S, Akram S, Sheikhattar A, Simon JZ, Zhang T, Babadi B. 2018. Real-Time tracking of selective auditory attention from M/EEG: a bayesian filtering approach. Frontiers in Neuroscience 12:262. DOI: https://doi.org/ 10.3389/fnins.2018.00262, PMID: 29765298)

**非线性解码** 

人类听觉系统**非线性**特点（ Faure P, Korn H. 2001. Is there Chaos in the brain? I. concepts of nonlinear dynamics and methods of investigation. Comptes Rendus De l’Acade´mie Des Sciences- Series III- Sciences De La Vie 324:773–793. DOI: https://doi.org/10.1016/S0764-4469(01)01377-4）

因此采用非线性模型。

- feedforward neural network

    ( Taillez T, Kollmeier B, Meyer BT. 2017. Machine learning for decoding listeners’ attention from electroencephalography evoked by continuous speech. European Journal of Neuroscience 51:1234–1241. DOI: https://doi.org/10.1111/ejn.13790)

-  convolutional neural networks (CNNs) 方法

    优点：双说话人分离效果优于线性方法；

    缺点：长度10s 时效果好，准确率 75–85%，但时长缩短会导致性能下降。



### 1.2 决定窗时长问题

由于时长缩短会导致准确率下降，那么该如何平衡decision window 时长和准确率？

Geirnaert et al., 2020 提出了一种将两种属性结合成单一指标的方法，通过在具有稳健性约束的基于AAD的音量控制系统中寻找最佳权衡点，以最小化预期切换持续时间。通过对每次新的AAD决策使用较小的相对音量变化，可以提高对AAD错误的鲁棒性。

适合短时但准确率中等的需求。



### 1.3 位置问题

**任务转向：** 

重构的语音包络对应哪个语音刺激   →转向   语音刺激的空间位置。

**好处：** 无需干净语音。

**基础：** 

最近的研究（ Wolbers et al., 2011; Bednar and Lalor, 2018; Patel et al., 2018; O’Sullivan et al., 2019; Bednar and Lalor, 2020）表明，听觉注意的方向在神经上是编码的，这表明可能从 EEG 中解码出被注意声音的位置或轨迹。

一些使用脑磁图（MEG）的研究表明，尤其是α波段的功率可以被用来追踪听觉注意力的位置 (Frey et al., 2014; Wo¨stmann et al., 2016)。另有一项使用头皮脑电图（EEG）的研究发现β波段的功率与选择性注意力相关(Gao et al., 2017)。

**目的：**

通过 EEG 和 CNN 解码位置信息，再在分离出来的目的方向上应用 beamformer。



## 2. Materials and methods



















英文表达学习：

 The desired result is increased speech intelligibility for the listener.

















