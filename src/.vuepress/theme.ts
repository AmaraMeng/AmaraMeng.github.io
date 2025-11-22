import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";


export default hopeTheme({
  toc: {
    levels: [1, 6]
  },

  hostname: "https://pythiaroot.com",   //放的自己网站的地址

  author: {
    name: "Ran",
    url: "https://pythiaroot.com",      //放的自己网站的地址
  },

  logo: "/阿尔法 logo.jpg",     //修改的是网页左上角的标

  repo: "AmaraMeng/AmaraMeng.github.io",    //放的 github 的仓库

  docsDir: "src",
  changelog: true,
  lastUpdated: true,

  // 导航栏
  navbar,

  // 侧边栏
  sidebar:"structure",

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相关
  blog: {
    name: "臭臭 & Luna & 阿尔法",
    avatar: "/阿尔法 logo.jpg",    //右侧个人主页头像
    description: "努力学习的小白",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      // "/static-website-blog/": {
      //   hint: "Password: count-4-numbers",
      //   password: "1234",
      // },
      // "/programming/python/variable.html": {
      //   hint: "Password:count-4-numbers",
      //   password: "1234",
      // }
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    preview: true,
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: true,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: true,
    chartjs: false,
    echarts: false,
    mermaid: true,
    vuePlayground: false,
    sub: true,
    spoiler: true,
    sup: true,
    tasklist: true,
    include: true,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    highlighter: {
      type: "shiki",
      collapsedLines: 15,
      //   lineNumbers: 1,
      notationDiff: true,
      notationFocus: true,
      highlightLines: true,
      notationHighlight: true,
      notationErrorLevel: true,
      notationWordHighlight: true,
      //   langs: ['sql', 'python', 'java', 'javascript', 'c', 'c#', 'c++', 'html', 'css',
      //     'bash', 'rust', 'php', 'r', 'cmd', 'yaml', 'markdown', 'http', 'cmake', 'matlab',
      //     'plsql', 'ini', "fortran-free-form", "fortran-fixed-form", 'go', 'vue', 'tex', 'text', 'csv', 'fish',
      //     'makefile', 'typescript',
      //   ],
      // langAlias: {
      //   ["fortran"]: "fortran-free-form",
      // },
      theme: "monokai",
      // themes: {
      //   light: "monokai",
      //   dark: "one-dark-pro",
      // },
    },
    vPre: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    icon: {
      prefix: "iconfont icon-",
      assets: [
        //"https://bornforthis.cn/icon/iconfont.css",
        "//at.alicdn.com/t/c/font_4853525_ygxvx6so19.css"
      ],
    },
    search: {
      maxSuggestions: 32,
      hotKeys: [],
      // 你的选项
      locales: {
        "/": {
          placeholder: "搜索",
        }
      }
    },
    blog: true,

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Waline",
      serverURL: "https://comments.pythiaroot.com/",
      reaction: [
        'https://pythiaroot.com/Waline/tieba/tieba_agree.png',
        'https://pythiaroot.com/Waline/tieba/tieba_sunglasses.png',
        'https://pythiaroot.com/Waline/tieba/tieba_pick_nose.png',
        'https://pythiaroot.com/Waline/tieba/tieba_awkward.png',
        'https://pythiaroot.com/Waline/tieba/1f613.png',
        'https://pythiaroot.com/Waline/tieba/1f60f.png',
      ],
      comment: true, // 评论数统计
      pageview: true, // 浏览量统计
      noCopyright: true,
      dark: "auto",

    },

    components: {
      components: ["Badge", "VPCard"],
    },

  },
});
