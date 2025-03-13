import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{e as n,h as e,o as l}from"./app-oskXTSr5.js";const o="/assets/1740484371312-26a7bb83-8149-4e48-8059-08282104526c-D0WS2v19.png",i="/assets/1740484536731-b01d55a1-8cbc-4a92-8026-5f334b75d893-n_lygXxi.png",p="/assets/1741675459154-91e261fc-6d1e-4848-816c-d8ff355b9d2d-B-gZFfHB.png",t="/assets/1741676906102-73cbe41b-ad7b-4332-a8cc-866279993b29-BBQSrskm.png",c="/assets/1741070172011-88efac02-ab5b-48db-a5f5-049c1f626b38-B21V-jME.png",r="/assets/1741071597144-2756573b-806e-4299-80ed-ca405af38141-DXCVd_oY.png",d="/assets/1741071668878-fcc4be7d-e255-4444-8743-9b8cda42206e-DsQ7gKHB.png",u={};function F(h,s){return l(),n("div",null,s[0]||(s[0]=[e('<p>利用 VuePress Theme Hope 创建个人博客，主页点击 “快速上手” 查看参考教程。</p><figure><img src="'+o+'" alt="网站主页" tabindex="0" loading="lazy"><figcaption>网站主页</figcaption></figure><p>按照 “快速上手” 中 “运行环境设置” 安装 VSCode、Node.js、pnpm（项目管理器）等。</p><figure><img src="'+i+`" alt="运行环境设置" tabindex="0" loading="lazy"><figcaption>运行环境设置</figcaption></figure><h2 id="_1-项目创建" tabindex="-1"><a class="header-anchor" href="#_1-项目创建"><span>1. 项目创建</span></a></h2><h3 id="_1-1-确定项目创建位置-确定本地路径" tabindex="-1"><a class="header-anchor" href="#_1-1-确定项目创建位置-确定本地路径"><span>1.1. 确定项目创建位置（确定本地路径）</span></a></h3><p>选择合适的储存位置，建议纯英文路径，如：<code>D:\\Static-Site-Build</code>。</p><h3 id="_1-2-创建项目模板-网页模板" tabindex="-1"><a class="header-anchor" href="#_1-2-创建项目模板-网页模板"><span>1.2. 创建项目模板（网页模板）</span></a></h3><p>打开终端 Termius，快捷键 <code>Ctrl+L</code> 创建新的 Local Terminal ，此时默认路径为 C 盘；</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">C:\\Users\\12390</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要切换到刚刚确定的路径，即 <code>D:\\Static-Site-Build</code>，由于要从 C 盘切换到 D 盘，需要先输入<code>d:</code>切换到 D 盘；</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">C:\\Users\\12390</span><span style="color:#F8F8F2;">&gt;</span><span style="color:#E6DB74;">d:</span></span>
<span class="line"><span style="color:#A6E22E;">D:\\</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后输入 <code>cd+空格+文件夹</code> 文件夹为复制过来的路径 <code>D:\\Static-Site-Build</code> 。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">C:\\Users\\12390</span><span style="color:#F8F8F2;">&gt;</span><span style="color:#E6DB74;">d:</span></span>
<span class="line"><span style="color:#A6E22E;">D:\\</span><span style="color:#F8F8F2;">&gt;</span><span style="color:#66D9EF;">cd</span><span style="color:#E6DB74;"> D:</span><span style="color:#AE81FF;">\\S</span><span style="color:#E6DB74;">tatic-Site-Build</span></span>
<span class="line"><span style="color:#A6E22E;">D:\\Static-Site-Build</span><span style="color:#F8F8F2;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换路径完成后，按照教程，执行如下命令：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> create</span><span style="color:#E6DB74;"> vuepress-theme-hope</span><span style="color:#E6DB74;"> my-docs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中 my-docs 更改为自己要搭建的网站的域名，也是路径 <code>D:\\Static-Site-Build</code>下的子文件名。</p><p>执行命令后，最终出现如下地址，<code>ctrl+点击local后链接</code>即可访问本地开发服务器。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">  ➜</span><span style="color:#E6DB74;">  Local:</span><span style="color:#E6DB74;">   http://localhost:8080/</span></span>
<span class="line"><span style="color:#A6E22E;">  ➜</span><span style="color:#E6DB74;">  Network:</span><span style="color:#E6DB74;"> http://192.168.1.106:8080/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-网站配置信息修改" tabindex="-1"><a class="header-anchor" href="#_2-网站配置信息修改"><span>2. 网站配置信息修改</span></a></h2><h3 id="_2-1-网站本地运行" tabindex="-1"><a class="header-anchor" href="#_2-1-网站本地运行"><span>2.1. 网站本地运行</span></a></h3><p>本地运行之前，必须进入到网站路径下，然后 Termius 中输入如下命令启动开发服务器，若退出，连续两次 <code>ctrl + c</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> run</span><span style="color:#E6DB74;"> docs:dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-网站信息修改" tabindex="-1"><a class="header-anchor" href="#_2-2-网站信息修改"><span>2.2. 网站信息修改</span></a></h3><ol><li><code>crtl + L</code> 新建本地终端，进入到网站文件夹。</li><li>网站文件夹下直接打开 VScode：命令行输入 <code>code .</code>（注意：code 和 点 之间有空格）</li></ol><h4 id="_2-2-1-title-和-description-修改" tabindex="-1"><a class="header-anchor" href="#_2-2-1-title-和-description-修改"><span>2.2.1. title 和 description 修改</span></a></h4><p>VScode 中 <code>src</code> 目录下 <code>config.ts</code> 文件中可以修改 title 和 description ，下文代码块中已经修改好了。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">import</span><span style="color:#E6DB74;"> {</span><span style="color:#E6DB74;"> defineUserConfig</span><span style="color:#E6DB74;"> }</span><span style="color:#E6DB74;"> from</span><span style="color:#E6DB74;"> &quot;vuepress&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#A6E22E;">import</span><span style="color:#E6DB74;"> theme</span><span style="color:#E6DB74;"> from</span><span style="color:#E6DB74;"> &quot;./theme.js&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F8F8F2;"> default defineUserConfig({</span></span>
<span class="line"><span style="color:#A6E22E;">  base:</span><span style="color:#E6DB74;"> &quot;/&quot;,</span></span>
<span class="line"><span style="color:#A6E22E;">  lang:</span><span style="color:#E6DB74;"> &quot;zh-CN&quot;,</span></span>
<span class="line"><span style="color:#A6E22E;">  title:</span><span style="color:#E6DB74;"> &quot;Pythia’s Root&quot;,</span></span>
<span class="line"><span style="color:#A6E22E;">  description:</span><span style="color:#E6DB74;"> &quot; Snake my way to a content heart&quot;,</span></span>
<span class="line"><span style="color:#A6E22E;">  theme,</span></span>
<span class="line"><span style="color:#A6E22E;">  //</span><span style="color:#E6DB74;"> 和</span><span style="color:#E6DB74;"> PWA</span><span style="color:#E6DB74;"> 一起启用</span></span>
<span class="line"><span style="color:#A6E22E;">  //</span><span style="color:#E6DB74;"> shouldPrefetch:</span><span style="color:#AE81FF;"> false</span><span style="color:#E6DB74;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-logo-修改" tabindex="-1"><a class="header-anchor" href="#_2-2-2-logo-修改"><span>2.2.2. logo 修改</span></a></h4><ol><li>把 logo 放入<code>网站路径/src/.vuepress/public/</code> 下。</li></ol><p>有几种方法可选：</p><ol><li><p>直接放到 public 文件夹中</p></li><li><p>也可以在 public 文件夹中新建文件夹做分类管理，方便后期增大体量进行维护。</p></li><li><p>VScode 中修改 网站路径 下的 <code>README.md</code> 中的 <code>heroImage:</code> 。</p></li></ol><p>格式：（一开始的斜杠代表 public 文件夹）/ 文件夹名称（若有）/ 图片名称 . 后缀。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">heroImage:</span><span style="color:#E6DB74;"> /logo.jpg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-2-3-网站背景图片修改" tabindex="-1"><a class="header-anchor" href="#_2-2-3-网站背景图片修改"><span>2.2.3. 网站背景图片修改</span></a></h4><ol><li>将修改的图片放入到 public 文件夹中</li><li>VScode 中 <code>README.md</code> 文件夹中修改，增加命令行（格式同头像上传，注意 / 前需要有空格）</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">bgImage:</span><span style="color:#E6DB74;"> /bgpic.jpg</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_2-2-4-增加网站搜索功能" tabindex="-1"><a class="header-anchor" href="#_2-2-4-增加网站搜索功能"><span>2.2.4. 增加网站搜索功能</span></a></h4><ol><li>安装 search 包 （Termius）。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> add</span><span style="color:#AE81FF;"> -D</span><span style="color:#E6DB74;"> @vuepress/plugin-search@next</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>VScode 操作，theme.ts 中 plugins 下输入如下命令。</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">//</span><span style="color:#E6DB74;"> 在这里配置主题提供的插件</span></span>
<span class="line"><span style="color:#A6E22E;">  plugins:</span><span style="color:#E6DB74;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">    search:</span><span style="color:#E6DB74;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">      maxSuggestions:</span><span style="color:#E6DB74;"> 32,</span></span>
<span class="line"><span style="color:#A6E22E;">      hotKeys:</span><span style="color:#F8F8F2;"> [],</span></span>
<span class="line"><span style="color:#A6E22E;">      //</span><span style="color:#E6DB74;"> 你的选项</span></span>
<span class="line"><span style="color:#A6E22E;">      locales:</span><span style="color:#E6DB74;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">        &quot;/&quot;</span><span style="color:#66D9EF;">:</span><span style="color:#E6DB74;"> {</span></span>
<span class="line"><span style="color:#A6E22E;">          placeholder:</span><span style="color:#E6DB74;"> &quot;搜索&quot;,</span></span>
<span class="line"><span style="color:#F8F8F2;">        }</span></span>
<span class="line"><span style="color:#F8F8F2;">      }</span></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>重启本地开发。</p></li><li><p>其他补充：</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> remove</span><span style="color:#E6DB74;"> nodejs-jieba</span><span style="color:#88846F;">                   #卸载 nodejs-jieba 安装包</span></span>
<span class="line"><span style="color:#A6E22E;">pnpm</span><span style="color:#E6DB74;"> remove</span><span style="color:#E6DB74;"> @vuepress/plugin-slimsearch</span><span style="color:#88846F;">    #卸载 slimsearch 安装包</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-增加网站评论功能" tabindex="-1"><a class="header-anchor" href="#_2-2-5-增加网站评论功能"><span>2.2.5. 增加网站评论功能</span></a></h4><ol><li>需要借助第三方软件，教程如下：</li></ol><p><a href="https://waline.js.org/guide/get-started/" target="_blank" rel="noopener noreferrer">https://waline.js.org/guide/get-started/</a></p><ol start="2"><li><p>本地修改</p></li><li><p>终端中，网站相应文件夹下打开 VScode</p></li><li><p><code>theme.ts</code>中找到 comment ，修改命令如下：</p></li></ol><p>注意：需要按照提示先安装 @waline/client ，终端相应文件夹中输入命令 <code>pnpm add -D @waline/client</code> 进行安装。</p><div class="language-typescript line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;">// 启用之前需安装 @waline/client</span></span>
<span class="line"><span style="color:#88846F;">// 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！</span></span>
<span class="line"><span style="color:#F8F8F2;">comment: {      </span></span>
<span class="line"><span style="color:#F8F8F2;">  provider: </span><span style="color:#E6DB74;">&quot;Waline&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    serverURL: </span><span style="color:#E6DB74;">&quot;https://comments.pythiaroot.com/&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    reaction: [</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/tieba_agree.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/tieba_sunglasses.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/tieba_pick_nose.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/tieba_awkward.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/1f613.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#E6DB74;">    &#39;https://bornforthis.cn/Waline/tieba/1f60f.png&#39;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">  ],</span></span>
<span class="line"><span style="color:#F8F8F2;">    comment: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 评论数统计</span></span>
<span class="line"><span style="color:#F8F8F2;">    pageview: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">, </span><span style="color:#88846F;">// 浏览量统计</span></span>
<span class="line"><span style="color:#F8F8F2;">    noCopyright: </span><span style="color:#AE81FF;">true</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    dark: </span><span style="color:#E6DB74;">&quot;auto&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">    },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ol><li>在 github 上发布。</li></ol><h4 id="_2-2-6-网站菜单栏修改" tabindex="-1"><a class="header-anchor" href="#_2-2-6-网站菜单栏修改"><span>2.2.6. 网站菜单栏修改</span></a></h4><ol><li>在阿里巴巴内建立自己的项目 或 参与其他项目。</li><li>VScode 中 <code>theme.ts</code>文件中修改图标库链接，才能从阿里巴巴对应的图标库中调用。</li></ol><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">icon: {</span></span>
<span class="line"><span style="color:#F8F8F2;">  prefix: </span><span style="color:#E6DB74;">&quot;iconfont icon-&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#F8F8F2;">    assets: [</span></span>
<span class="line"><span style="color:#88846F;">    //&quot;https://bornforthis.cn/icon/iconfont.css&quot;, （别人共享的项目，此处注释掉）</span></span>
<span class="line"><span style="color:#E6DB74;">    &quot;//at.alicdn.com/t/c/font_4853525_e4k3iwioena.css&quot;</span></span>
<span class="line"><span style="color:#F8F8F2;">  ],</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><code>navbar.ts</code>文件中设置菜单，多个子集用 <code>children</code>，icon 部分从阿里巴巴图标库中复制代码， link 暂时没有用 # 。</li></ol><div class="language-typescript line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> { navbar } </span><span style="color:#F92672;">from</span><span style="color:#E6DB74;"> &quot;vuepress-theme-hope&quot;</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F92672;">export</span><span style="color:#F92672;"> default</span><span style="color:#A6E22E;"> navbar</span><span style="color:#F8F8F2;">([</span></span>
<span class="line"><span style="color:#E6DB74;">  &quot;/&quot;</span><span style="color:#F8F8F2;">,</span></span>
<span class="line"><span style="color:#88846F;">// {</span></span>
<span class="line"><span style="color:#88846F;">//   text: &quot;demo&quot;,</span></span>
<span class="line"><span style="color:#88846F;">//   icon: &quot;blog&quot;,</span></span>
<span class="line"><span style="color:#88846F;">//   children: [</span></span>
<span class="line"><span style="color:#88846F;">//     { text: &quot;disable&quot;,  icon: &quot;taozi&quot;, link: &quot;/demo/disable.md&quot; },</span></span>
<span class="line"><span style="color:#88846F;">//     { text: &quot;encrypt&quot;, icon: &quot;exercise&quot;, link: &quot;demo/encrypt.md&quot; },</span></span>
<span class="line"><span style="color:#88846F;">//     { text: &quot;layout&quot;, icon: &quot;blog&quot;, link: &quot;demo/layout.md&quot;},</span></span>
<span class="line"><span style="color:#88846F;">//   ]</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span></span>
<span class="line"><span style="color:#88846F;">// },</span></span>
<span class="line"><span style="color:#F8F8F2;">{text: </span><span style="color:#E6DB74;">&quot;编程&quot;</span><span style="color:#F8F8F2;">, icon: </span><span style="color:#E6DB74;">&quot;python&quot;</span><span style="color:#F8F8F2;">, link: </span><span style="color:#E6DB74;">&quot;#&quot;</span><span style="color:#F8F8F2;">,},</span></span>
<span class="line"><span style="color:#F8F8F2;">{text: </span><span style="color:#E6DB74;">&quot;人工耳蜗&quot;</span><span style="color:#F8F8F2;">, icon: </span><span style="color:#E6DB74;">&quot;rengongerwoshenqing&quot;</span><span style="color:#F8F8F2;">, link: </span><span style="color:#E6DB74;">&quot;#&quot;</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">{text: </span><span style="color:#E6DB74;">&quot;语音学&quot;</span><span style="color:#F8F8F2;">, icon: </span><span style="color:#E6DB74;">&quot;shengboyuyinxiaoxi&quot;</span><span style="color:#F8F8F2;">, link: </span><span style="color:#E6DB74;">&quot;#&quot;</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">{text: </span><span style="color:#E6DB74;">&quot;翻译&quot;</span><span style="color:#F8F8F2;">, icon: </span><span style="color:#E6DB74;">&quot;fanyi&quot;</span><span style="color:#F8F8F2;">, link: </span><span style="color:#E6DB74;">&quot;#&quot;</span><span style="color:#F8F8F2;">},</span></span>
<span class="line"><span style="color:#F8F8F2;">  </span></span>
<span class="line"><span style="color:#F8F8F2;">]);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="_2-2-7-上传文章" tabindex="-1"><a class="header-anchor" href="#_2-2-7-上传文章"><span>2.2.7. 上传文章</span></a></h4><ol><li>所有文章都在 <code>src</code>，目录下，建议文件名都为英文。</li><li>根据菜单建立 <code>programming/python</code> 文件夹，文件夹中文章内容后缀为 <code>.md</code>，在 Typora 中编辑，如下图所示：</li></ol><figure><img src="`+p+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol start="3"><li>Typora 中编辑文章，开始均需要输入 <code>--- + 回车</code>，内容如下：</li></ol><div class="language-typescript line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">title: Python</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Variable     </span><span style="color:#88846F;">//此处为文章标题，冒号后面都要加空格</span></span>
<span class="line"><span style="color:#F8F8F2;">date: </span><span style="color:#AE81FF;">2025</span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">03</span><span style="color:#F92672;">-</span><span style="color:#AE81FF;">11</span><span style="color:#AE81FF;"> 14</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">48</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">19</span><span style="color:#88846F;">    //此处时间可到链接 https://autotime.bornforthis.cn/ 中生成</span></span>
<span class="line"><span style="color:#F8F8F2;">author: Ran</span></span>
<span class="line"><span style="color:#F8F8F2;">isOriginal: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">category:</span></span>
<span class="line"><span style="color:#F92672;">    -</span><span style="color:#F8F8F2;"> static website          </span><span style="color:#88846F;">//文章分类</span></span>
<span class="line"><span style="color:#F8F8F2;">tag:</span></span>
<span class="line"><span style="color:#F92672;">    -</span><span style="color:#F8F8F2;"> static website          </span><span style="color:#88846F;">//文章标签</span></span>
<span class="line"><span style="color:#F8F8F2;">icon: boke</span></span>
<span class="line"><span style="color:#F8F8F2;">sticky: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">star: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">article: </span><span style="color:#AE81FF;">false</span><span style="color:#88846F;">       //若不需要在主页中显示，则设置为false，若需要显示则为 ture</span></span>
<span class="line"><span style="color:#F8F8F2;">timeline: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">image: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">navbar: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">sidebarIcon: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">headerDepth: </span><span style="color:#AE81FF;">5</span></span>
<span class="line"><span style="color:#F8F8F2;">comment: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">lastUpdated: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">editLink: </span><span style="color:#AE81FF;">false</span></span>
<span class="line"><span style="color:#F8F8F2;">backToTop: </span><span style="color:#AE81FF;">true</span></span>
<span class="line"><span style="color:#F8F8F2;">toc: </span><span style="color:#AE81FF;">true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>注：此处为信息 Frontmatter 配置，直接生成可用链接 <a href="https://autotime.bornforthis.cn/date-text" target="_blank" rel="noopener noreferrer">https://autotime.bornforthis.cn/date-text</a> 。</p><p>本地开发时，将网址 <a href="http://localhost:8080/static-website-blog/" target="_blank" rel="noopener noreferrer">http://localhost:8080/static-website-blog/</a> 修改为 <a href="http://localhost:8080/category/" target="_blank" rel="noopener noreferrer">http://localhost:8080/category/</a> 时，即可通过分类访问对应的文章。</p><ol start="4"><li>文章放置位置</li></ol><p>VScode 中进入 <code>navbar.ts</code> 文件夹修改对应菜单下文章，如上述文章要放在菜单 <code>编程</code> 下的 <code>Python</code>中，则将 link 修改为：</p><div class="language-typescript line-numbers-mode" data-highlighter="shiki" data-ext="typescript" data-title="typescript" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">{text: </span><span style="color:#E6DB74;">&quot;编程&quot;</span><span style="color:#F8F8F2;">, icon: </span><span style="color:#E6DB74;">&quot;python&quot;</span><span style="color:#F8F8F2;">, link: </span><span style="color:#E6DB74;">&quot;/programming/python/&quot;</span><span style="color:#F8F8F2;">,},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注：python 后一定加上 <code>/ </code>才能显示如大纲一样的文章列表。</p><figure><img src="`+t+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="_2-3-修改网站配置未生效" tabindex="-1"><a class="header-anchor" href="#_2-3-修改网站配置未生效"><span>2.3. 修改网站配置未生效：</span></a></h2><p>本身 vuepress 是支持热重载，意味着所作的任何修改，都会被自动刷新页面展示，不用手动关闭本地运行再重新启动。（不用重启）。如果修改后发现页面没有显示最新修改的效果，则需要如下操作：</p><ol><li><p>手动关闭本地运行 <code>CTRL + C</code></p></li><li><p>再次运行 <code>pnpm run docs : dev</code></p></li><li><p>出现场景（经验）：</p></li><li><p>修改侧边栏</p></li><li><p>新建文章</p></li><li><p>修改背景图片</p></li><li><p>等。。。</p></li></ol><p>原则：不需要记，只需要知道出问题，如何操作。</p><p>经验会过时，原则不会</p><p>《羊皮卷》、《世界上最伟大的推销员》</p><h1 id="_3-网站部署" tabindex="-1"><a class="header-anchor" href="#_3-网站部署"><span>3. 网站部署</span></a></h1><p>指开发完成的网站从本地环境发布到服务器，使其能够通过互联网访问。</p><h2 id="_3-1-github创建部署仓库" tabindex="-1"><a class="header-anchor" href="#_3-1-github创建部署仓库"><span>3.1. Github创建部署仓库</span></a></h2><ol><li>创建 Github 特殊仓库，仓库命名格式 <code>AmaraMeng.github.io</code> 这样命名，Github 则会自动识别为部署静态网站的仓库。（类似实现了服务器功能）。</li><li>配置 SSH，实现电脑和 Github 账号无需账号密码连接，教程如下：<a href="https://bornforthis.cn/blog/2024/7month/git-ssh.html#_2-%E5%BC%80%E5%A7%8B" target="_blank" rel="noopener noreferrer">https://bornforthis.cn/blog/2024/7month/git-ssh.html#_2-%E5%BC%80%E5%A7%8B</a></li><li>在项目路径下：</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> add</span><span style="color:#E6DB74;"> .</span><span style="color:#88846F;">   # 添加所有文件</span></span>
<span class="line"><span style="color:#A6E22E;">git</span><span style="color:#E6DB74;"> commit</span><span style="color:#AE81FF;"> -m</span><span style="color:#E6DB74;">  &quot;初始化网站文件&quot;</span><span style="color:#88846F;">   # 说明这一次做了什么修改</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-2-解析域名" tabindex="-1"><a class="header-anchor" href="#_3-2-解析域名"><span>3.2. 解析域名</span></a></h2><p>将自己购买的域名和 github 的域名联系起来，在 github 上更新后自动发布到网站上，可以从其他渠道输入购买的域名即可访问网站。</p><ol><li>github 中进入网站特殊仓库，<code>AmaraMeng.github.io</code> settings 选项中选中 pages ，Custom domain 中输入购买的域名并保存。</li></ol><figure><img src="`+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ol><li><p>登录阿里云，在 域名列表 中选择需要的域名，点击右侧 解析。添加记录，输入所需信息：</p></li><li><p>记录类型：CNAME</p></li><li><p>主机记录：输入@ 或者 www（注释：www表示域名 <a href="http://www.pythiaroot.com" target="_blank" rel="noopener noreferrer">www.pythiaroot.com</a>；@表示主域名 <a href="http://pythiaroot.com" target="_blank" rel="noopener noreferrer">pythiaroot.com</a>）</p></li><li><p>记录值：填写 github 域名，即<code>AmaraMeng.github.io</code></p></li></ol><p>共需添加两条记录，<a href="http://xn--www-c88dp7omg.pythiaroot.com" target="_blank" rel="noopener noreferrer">分别为www.pythiaroot.com</a> 和 <a href="http://pythiaroot.com" target="_blank" rel="noopener noreferrer">pythiaroot.com</a>。</p><ol><li>用VScode 在网站文件夹的 public 中新建 CNAME 文件，该文件中保存的是购买的域名 <code>pythiaroot.com</code>，便于下次 gitbub 部署时还需要重复解析域名这一步骤。</li></ol><h2 id="_3-3-将本地修改上传到-github-上并发布" tabindex="-1"><a class="header-anchor" href="#_3-3-将本地修改上传到-github-上并发布"><span>3.3. 将本地修改上传到 github 上并发布</span></a></h2><p>VScode 点击左侧侧边栏第三项 Source Control ，输入修改内容并提交。</p><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在 github 对应的库里的 actions 中即可看到修改和发布情况。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><h2 id="-1" tabindex="-1"><a class="header-anchor" href="#-1"><span></span></a></h2>',93)]))}const m=a(u,[["render",F],["__file","Static-website-building.html.vue"]]),v=JSON.parse('{"path":"/static-website-blog/Static-website-building.html","title":"静态网站搭建","lang":"zh-CN","frontmatter":{"title":"静态网站搭建","icon":"boke","date":"2025-03-13T13:41:58.000Z","author":"Ran","isOriginal":true,"category":["static website"],"tag":["static website"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"利用 VuePress Theme Hope 创建个人博客，主页点击 “快速上手” 查看参考教程。 网站主页网站主页 按照 “快速上手” 中 “运行环境设置” 安装 VSCode、Node.js、pnpm（项目管理器）等。 运行环境设置运行环境设置 1. 项目创建 1.1. 确定项目创建位置（确定本地路径） 选择合适的储存位置，建议纯英文路径，如：D:...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/static-website-blog/Static-website-building.html"}],["meta",{"property":"og:site_name","content":"Pythia’s Root"}],["meta",{"property":"og:title","content":"静态网站搭建"}],["meta",{"property":"og:description","content":"利用 VuePress Theme Hope 创建个人博客，主页点击 “快速上手” 查看参考教程。 网站主页网站主页 按照 “快速上手” 中 “运行环境设置” 安装 VSCode、Node.js、pnpm（项目管理器）等。 运行环境设置运行环境设置 1. 项目创建 1.1. 确定项目创建位置（确定本地路径） 选择合适的储存位置，建议纯英文路径，如：D:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-13T06:38:52.000Z"}],["meta",{"property":"article:author","content":"Ran"}],["meta",{"property":"article:tag","content":"static website"}],["meta",{"property":"article:published_time","content":"2025-03-13T13:41:58.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-13T06:38:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"静态网站搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2025-03-13T13:41:58.000Z\\",\\"dateModified\\":\\"2025-03-13T06:38:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ran\\"}]}"]]},"git":{"createdTime":1741847932000,"updatedTime":1741847932000,"contributors":[{"name":"AmaraMeng","username":"AmaraMeng","email":"ranmeng9558@gmail.com","commits":1,"url":"https://github.com/AmaraMeng"}]},"readingTime":{"minutes":7.37,"words":2212},"filePathRelative":"static-website-blog/Static-website-building.md","localizedDate":"2025年3月13日","excerpt":"<p>利用 VuePress Theme Hope 创建个人博客，主页点击 “快速上手” 查看参考教程。</p>\\n<figure><figcaption>网站主页</figcaption></figure>\\n<p>按照 “快速上手” 中 “运行环境设置” 安装 VSCode、Node.js、pnpm（项目管理器）等。</p>\\n<figure><figcaption>运行环境设置</figcaption></figure>\\n<h2>1. 项目创建</h2>\\n<h3>1.1. 确定项目创建位置（确定本地路径）</h3>\\n<p>选择合适的储存位置，建议纯英文路径，如：<code>D:\\\\Static-Site-Build</code>。</p>","autoDesc":true}');export{m as comp,v as data};
