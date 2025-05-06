---
title: Markdown公式符号大全（LaTeX 语法）
date: 2025-03-13 15:38:39
author: Ran
isOriginal: true
icon: boke
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true

comment: true
lastUpdated: true
editLink: false
backToTop: true
toc: true
---



Markdown 使用 LaTeX 语法支持数学公式，需要用美元符号 `$` 或 `$$` 包围公式内容，例如：

```markdown
$E = mc^2$
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$
```
渲染后：
- 行内公式示例：$E = mc^2$
- 块级公式示例：
  $$
  \sum_{i=1}^{n} i = \frac{n(n+1)}{2}
  $$

---

## 1. 基本数学符号

| 说明    | LaTeX 代码    | 渲染          |
| ------- | ------------- | ------------- |
| 加      | `+`           | $+$           |
| 减      | `-`           | $-$           |
| 乘      | `\times`      | $\times$      |
| 除      | `\div`        | $\div$        |
| 点乘    | `\cdot`       | $\cdot$       |
| 分数    | `\frac{a}{b}` | $\frac{a}{b}$ |
| 平方根  | `\sqrt{x}`    | $\sqrt{x}$    |
| 开n次根 | `\sqrt[n]{x}` | $\sqrt[n]{x}$ |
| 上标    | `a^b`         | $a^b$         |
| 下标    | `a_b`         | $a_b$         |

---

## 2. 关系运算符

| 说明     | LaTeX 代码 | 渲染      |
| -------- | ---------- | --------- |
| 等于     | `=`        | $=$       |
| 不等于   | `\neq`     | $\neq$    |
| 小于     | `<`        | $<$       |
| 大于     | `>`        | $>$       |
| 小于等于 | `\leq`     | $\leq$    |
| 大于等于 | `\geq`     | $\geq$    |
| 约等于   | `\approx`  | $\approx$ |

---

## 3. 逻辑运算符

| 说明 | LaTeX 代码        | 渲染              |
| ---- | ----------------- | ----------------- |
| 且   | `\land`           | $\land$           |
| 或   | `\lor`            | $\lor$            |
| 非   | `\neg`            | $\neg$            |
| 蕴含 | `\Rightarrow`     | $\Rightarrow$     |
| 等价 | `\Leftrightarrow` | $\Leftrightarrow$ |

---

## 4. 希腊字母

| 小写 | 代码       | 渲染       | 大写 | 代码       | 渲染       |
| ---- | ---------- | ---------- | ---- | ---------- | ---------- |
| α    | `\alpha`   | $\alpha$   | Α    | `A`        | $A$        |
| β    | `\beta`    | $\beta$    | Β    | `B`        | $B$        |
| γ    | `\gamma`   | $\gamma$   | Γ    | `\Gamma`   | $\Gamma$   |
| δ    | `\delta`   | $\delta$   | Δ    | `\Delta`   | $\Delta$   |
| ε    | `\epsilon` | $\epsilon$ | Ε    | `E`        | $E$        |
| ζ    | `\zeta`    | $\zeta$    | Ζ    | `Z`        | $Z$        |
| η    | `\eta`     | $\eta$     | Η    | `H`        | $H$        |
| θ    | `\theta`   | $\theta$   | Θ    | `\Theta`   | $\Theta$   |
| ι    | `\iota`    | $\iota$    | Ι    | `I`        | $I$        |
| κ    | `\kappa`   | $\kappa$   | Κ    | `K`        | $K$        |
| λ    | `\lambda`  | $\lambda$  | Λ    | `\Lambda`  | $\Lambda$  |
| μ    | `\mu`      | $\mu$      | Μ    | `M`        | $M$        |
| ν    | `\nu`      | $\nu$      | Ν    | `N`        | $N$        |
| ξ    | `\xi`      | $\xi$      | Ξ    | `\Xi`      | $\Xi$      |
| ο    | `o`        | $o$        | Ο    | `O`        | $O$        |
| π    | `\pi`      | $\pi$      | Π    | `\Pi`      | $\Pi$      |
| ρ    | `\rho`     | $\rho$     | Ρ    | `P`        | $P$        |
| σ    | `\sigma`   | $\sigma$   | Σ    | `\Sigma`   | $\Sigma$   |
| τ    | `\tau`     | $\tau$     | Τ    | `T`        | $T$        |
| υ    | `\upsilon` | $\upsilon$ | Υ    | `\Upsilon` | $\Upsilon$ |
| φ    | `\phi`     | $\phi$     | Φ    | `\Phi`     | $\Phi$     |
| χ    | `\chi`     | $\chi$     | Χ    | `X`        | $X$        |
| ψ    | `\psi`     | $\psi$     | Ψ    | `\Psi`     | $\Psi$     |
| ω    | `\omega`   | $\omega$   | Ω    | `\Omega`   | $\Omega$   |

---

## 5. 求和、积分、极限

| 说明     | LaTeX 代码                 | 渲染                       |
| -------- | -------------------------- | -------------------------- |
| 求和     | `\sum_{i=1}^{n} i`         | $\sum_{i=1}^{n} i$         |
| 积分     | `\int_{a}^{b} x dx`        | $\int_{a}^{b} x dx$        |
| 连续积分 | `\iint_A f(x,y)dxdy`       | $\iint_A f(x,y)dxdy$       |
| 三重积分 | `\iiint_V f(x,y,z)dxdydz`  | $\iiint_V f(x,y,z)dxdydz$  |
| 极限     | `\lim_{x \to \infty} f(x)` | $\lim_{x \to \infty} f(x)$ |

---

## 6. 向量、矩阵

| 说明   | LaTeX 代码                                     | 渲染                                           |
| ------ | ---------------------------------------------- | ---------------------------------------------- |
| 向量   | `\vec{a}`                                      | $\vec{a}$                                      |
| 行列式 | `\det(A)`                                      | $\det(A)$                                      |
| 矩阵   | `\begin{bmatrix} a & b \\ c & d \end{bmatrix}` | $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ |

---

$\begin{bmatrix} a & b & c \\ d & e & f \\ 1& 2 & 3 \end{bmatrix}$





## 7. 其他数学符号

| 说明     | LaTeX 代码                      | 渲染                            |
| -------- | ------------------------------- | ------------------------------- |
| 无穷大   | `\infty`                        | $\infty$                        |
| 部分导数 | `\frac{\partial f}{\partial x}` | $\frac{\partial f}{\partial x}$ |
| 叉积     | `\times`                        | $\times$                        |
| 内积     | `\cdot`                         | $\cdot$                         |
| 属于     | `\in`                           | $\in$                           |
| 不属于   | `\notin`                        | $\notin$                        |
| 子集     | `\subset`                       | $\subset$                       |
| 真子集   | `\subsetneq`                    | $\subsetneq$                    |
| 空集     | `\emptyset`                     | $\emptyset$                     |