// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var navbar_default = navbar([
  "/",
  // {
  //   text: "demo",
  //   icon: "blog",
  //   children: [
  //     { text: "disable",  icon: "taozi", link: "/demo/disable.md" },
  //     { text: "encrypt", icon: "exercise", link: "demo/encrypt.md" },
  //     { text: "layout", icon: "blog", link: "demo/layout.md"},
  //   ]
  // },
  {
    text: "\u7F16\u7A0B",
    icon: "biancheng-01",
    children: [
      { text: "Static website building-blog", icon: "boke", link: "/programming/static-website-blog/" },
      { text: "Python", icon: "python", link: "/programming/python/" },
      { text: "ThinkDSP", icon: "python", link: "/programming/ThinkDSP/" }
    ]
  },
  { text: "\u4EBA\u5DE5\u8033\u8717", icon: "rengongerwoshenqing", link: "#" },
  { text: "\u8BED\u97F3\u5B66", icon: "shengboyuyinxiaoxi", link: "#" },
  {
    text: "\u7FFB\u8BD1",
    icon: "fanyi",
    children: [
      { text: "\u8BCD\u6C47", icon: "cihuiben", link: "/translation/vocabulary/" },
      { text: "Peki", icon: "fanyi", link: "/translation/peki/" }
    ]
  },
  { text: "\u8FD0\u52A8", icon: "jianshenfang", link: "/sports/" },
  { text: "\u9605\u8BFB", icon: "yuedu", link: "/reading/" }
]);

// src/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var sidebar_default = sidebar({
  // "/": "structure",       //这是默认 src 文件夹下所有文件夹自动排序
  "/programming/": "structure",
  //编程主菜单栏
  "/sports/": "structure"
  //运动
  // "/": [
  //   {
  //     text: "编程",
  //     icon: "biancheng-01",
  //     prefix: "/programming/python",
  //     children: [
  //       "01-variable",
  //     ]
  //   },
  //   {
  //     text: "Web",
  //     icon: "site",
  //     prefix: "/static-website-blog/",
  //     children: [
  //       "article-typora",
  //     ]
  //   }
  // ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  toc: {
    levels: [1, 6]
  },
  hostname: "https://pythiaroot.com",
  //放的自己网站的地址
  author: {
    name: "Ran",
    url: "https://pythiaroot.com"
    //放的自己网站的地址
  },
  logo: "/\u963F\u5C14\u6CD5 logo.jpg",
  //修改的是网页左上角的标
  repo: "AmaraMeng/AmaraMeng.github.io",
  //放的 github 的仓库
  docsDir: "src",
  changelog: true,
  lastUpdated: true,
  // 导航栏
  navbar: navbar_default,
  // 侧边栏
  sidebar: sidebar_default,
  // 页脚
  footer: "\u9ED8\u8BA4\u9875\u811A",
  displayFooter: true,
  // 博客相关
  blog: {
    name: "\u81ED\u81ED & Luna & \u963F\u5C14\u6CD5",
    avatar: "/\u963F\u5C14\u6CD5 logo.jpg",
    //右侧个人主页头像
    description: "\u52AA\u529B\u5B66\u4E60\u7684\u5C0F\u767D",
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
      Zhihu: "https://example.com"
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    }
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
    }
  },
  // 多语言配置
  metaLocales: {
    editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
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
              content: "Recommended"
            };
        }
      }
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
      theme: "monokai"
      // themes: {
      //   light: "monokai",
      //   dark: "one-dark-pro",
      // },
    },
    vPre: true
  },
  // 在这里配置主题提供的插件
  plugins: {
    icon: {
      prefix: "iconfont icon-",
      assets: [
        //"https://bornforthis.cn/icon/iconfont.css",
        "//at.alicdn.com/t/c/font_4853525_ygxvx6so19.css"
      ]
    },
    search: {
      maxSuggestions: 32,
      hotKeys: [],
      // 你的选项
      locales: {
        "/": {
          placeholder: "\u641C\u7D22"
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
        "https://pythiaroot.com/Waline/tieba/tieba_agree.png",
        "https://pythiaroot.com/Waline/tieba/tieba_sunglasses.png",
        "https://pythiaroot.com/Waline/tieba/tieba_pick_nose.png",
        "https://pythiaroot.com/Waline/tieba/tieba_awkward.png",
        "https://pythiaroot.com/Waline/tieba/1f613.png",
        "https://pythiaroot.com/Waline/tieba/1f60f.png"
      ],
      comment: true,
      // 评论数统计
      pageview: true,
      // 浏览量统计
      noCopyright: true,
      dark: "auto"
    },
    components: {
      components: ["Badge", "VPCard"]
    }
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Pythia\u2019s Root",
  description: " Snake my way to a content heart",
  theme: theme_default,
  head: [
    ["link", { rel: "icon", href: "/logo.jpg" }]
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9TdGF0aWMtU2l0ZS1CdWlsZC9weXRoaWFyb290LmNvbS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTdGF0aWMtU2l0ZS1CdWlsZFxcXFxweXRoaWFyb290LmNvbVxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU3RhdGljLVNpdGUtQnVpbGQvcHl0aGlhcm9vdC5jb20vc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbGFuZzogXCJ6aC1DTlwiLFxuICB0aXRsZTogXCJQeXRoaWFcdTIwMTlzIFJvb3RcIixcbiAgZGVzY3JpcHRpb246IFwiIFNuYWtlIG15IHdheSB0byBhIGNvbnRlbnQgaGVhcnRcIixcblxuICB0aGVtZSxcbiAgaGVhZDogW1xuICAgIFsnbGluaycsIHtyZWw6ICdpY29uJywgaHJlZjogJy9sb2dvLmpwZyd9XVxuICBdXG5cbiAgLy8gXHU1NDhDIFBXQSBcdTRFMDBcdThENzdcdTU0MkZcdTc1MjhcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1N0YXRpYy1TaXRlLUJ1aWxkL3B5dGhpYXJvb3QuY29tL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFN0YXRpYy1TaXRlLUJ1aWxkXFxcXHB5dGhpYXJvb3QuY29tXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1N0YXRpYy1TaXRlLUJ1aWxkL3B5dGhpYXJvb3QuY29tL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5pbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vc2lkZWJhci5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGhvcGVUaGVtZSh7XG4gIHRvYzoge1xuICAgIGxldmVsczogWzEsIDZdXG4gIH0sXG5cbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9weXRoaWFyb290LmNvbVwiLCAgIC8vXHU2NTNFXHU3Njg0XHU4MUVBXHU1REYxXHU3RjUxXHU3QUQ5XHU3Njg0XHU1NzMwXHU1NzQwXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJSYW5cIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9weXRoaWFyb290LmNvbVwiLCAgICAgIC8vXHU2NTNFXHU3Njg0XHU4MUVBXHU1REYxXHU3RjUxXHU3QUQ5XHU3Njg0XHU1NzMwXHU1NzQwXG4gIH0sXG5cbiAgbG9nbzogXCIvXHU5NjNGXHU1QzE0XHU2Q0Q1IGxvZ28uanBnXCIsICAgICAvL1x1NEZFRVx1NjUzOVx1NzY4NFx1NjYyRlx1N0Y1MVx1OTg3NVx1NURFNlx1NEUwQVx1ODlEMlx1NzY4NFx1NjgwN1xuXG4gIHJlcG86IFwiQW1hcmFNZW5nL0FtYXJhTWVuZy5naXRodWIuaW9cIiwgICAgLy9cdTY1M0VcdTc2ODQgZ2l0aHViIFx1NzY4NFx1NEVEM1x1NUU5M1xuXG4gIGRvY3NEaXI6IFwic3JjXCIsXG4gIGNoYW5nZWxvZzogdHJ1ZSxcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXG5cbiAgLy8gXHU1QkZDXHU4MjJBXHU2ODBGXG4gIG5hdmJhcixcblxuICAvLyBcdTRGQTdcdThGQjlcdTY4MEZcbiAgc2lkZWJhcixcblxuICAvLyBcdTk4NzVcdTgxMUFcbiAgZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxuICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxuXG4gIC8vIFx1NTM1QVx1NUJBMlx1NzZGOFx1NTE3M1xuICBibG9nOiB7XG4gICAgbmFtZTogXCJcdTgxRURcdTgxRUQgJiBMdW5hICYgXHU5NjNGXHU1QzE0XHU2Q0Q1XCIsXG4gICAgYXZhdGFyOiBcIi9cdTk2M0ZcdTVDMTRcdTZDRDUgbG9nby5qcGdcIiwgICAgLy9cdTUzRjNcdTRGQTdcdTRFMkFcdTRFQkFcdTRFM0JcdTk4NzVcdTU5MzRcdTUwQ0ZcbiAgICBkZXNjcmlwdGlvbjogXCJcdTUyQUFcdTUyOUJcdTVCNjZcdTRFNjBcdTc2ODRcdTVDMEZcdTc2N0RcIixcbiAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxuICAgIG1lZGlhczoge1xuICAgICAgQmFpZHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9CaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9EaW5nZGluZzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBEaXNjb3JkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIERyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEVtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICAvLyBFdmVybm90ZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBGYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBGbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gR2l0ZWU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGxhYjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIExhcms6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gTGluZXM6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFBvY2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBRUTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBRem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvLyBSZWRkaXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gUnNzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFN0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFR3aXR0ZXI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VjaGF0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vIFdoYXRzYXBwOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFlvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy8gVnVlUHJlc3NUaGVtZUhvcGU6IHtcbiAgICAgIC8vICAgaWNvbjogXCJodHRwczovL3RoZW1lLWhvcGUtYXNzZXRzLnZ1ZWpzLnByZXNzL2xvZ28uc3ZnXCIsXG4gICAgICAvLyAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzXCIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gXHU1MkEwXHU1QkM2XHU5MTREXHU3RjZFXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIC8vIFwiL3N0YXRpYy13ZWJzaXRlLWJsb2cvXCI6IHtcbiAgICAgIC8vICAgaGludDogXCJQYXNzd29yZDogY291bnQtNC1udW1iZXJzXCIsXG4gICAgICAvLyAgIHBhc3N3b3JkOiBcIjEyMzRcIixcbiAgICAgIC8vIH0sXG4gICAgICAvLyBcIi9wcm9ncmFtbWluZy9weXRob24vdmFyaWFibGUuaHRtbFwiOiB7XG4gICAgICAvLyAgIGhpbnQ6IFwiUGFzc3dvcmQ6Y291bnQtNC1udW1iZXJzXCIsXG4gICAgICAvLyAgIHBhc3N3b3JkOiBcIjEyMzRcIixcbiAgICAgIC8vIH1cbiAgICB9LFxuICB9LFxuXG4gIC8vIFx1NTkxQVx1OEJFRFx1OEEwMFx1OTE0RFx1N0Y2RVxuICBtZXRhTG9jYWxlczoge1xuICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gIH0sXG5cbiAgLy8gXHU1OTgyXHU2NzlDXHU2MEYzXHU4OTgxXHU1QjlFXHU2NUY2XHU2N0U1XHU3NzBCXHU0RUZCXHU0RjU1XHU2NTM5XHU1M0Q4XHVGRjBDXHU1NDJGXHU3NTI4XHU1QjgzXHUzMDAyXHU2Q0U4OiBcdThGRDlcdTVCRjlcdTY2RjRcdTY1QjBcdTYwMjdcdTgwRkRcdTY3MDlcdTVGODhcdTU5MjdcdThEMUZcdTk3NjJcdTVGNzFcdTU0Q0RcbiAgLy8gaG90UmVsb2FkOiB0cnVlLFxuXG4gIC8vIFx1NkI2NFx1NTkwNFx1NUYwMFx1NTQyRlx1NEU4Nlx1NUY4OFx1NTkxQVx1NTI5Rlx1ODBGRFx1NzUyOFx1NEU4RVx1NkYxNFx1NzkzQVx1RkYwQ1x1NEY2MFx1NUU5NFx1NEVDNVx1NEZERFx1NzU1OVx1NzUyOFx1NTIzMFx1NzY4NFx1NTI5Rlx1ODBGRFx1MzAwMlxuICBtYXJrZG93bjoge1xuICAgIHByZXZpZXc6IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgIGltZ01hcms6IHRydWUsXG4gICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICBtYXJrOiB0cnVlLFxuICAgIGNvZGVUYWJzOiB0cnVlLFxuICAgIHRhYnM6IHRydWUsXG4gICAgbWF0aDogdHJ1ZSxcbiAgICBoaW50OiB0cnVlLFxuICAgIGFsZXJ0OiB0cnVlLFxuICAgIGNoYXJ0anM6IGZhbHNlLFxuICAgIGVjaGFydHM6IGZhbHNlLFxuICAgIG1lcm1haWQ6IHRydWUsXG4gICAgdnVlUGxheWdyb3VuZDogZmFsc2UsXG4gICAgc3ViOiB0cnVlLFxuICAgIHNwb2lsZXI6IHRydWUsXG4gICAgc3VwOiB0cnVlLFxuICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgIGluY2x1ZGU6IHRydWUsXG4gICAgYXR0cnM6IGZhbHNlLFxuICAgIGZvb3Rub3RlOiB0cnVlLFxuICAgIGFsaWduOiB0cnVlLFxuICAgIGZsb3djaGFydDogZmFsc2UsXG4gICAgZ2ZtOiB0cnVlLFxuICAgIHN0eWxpemU6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIGhpZ2hsaWdodGVyOiB7XG4gICAgICB0eXBlOiBcInNoaWtpXCIsXG4gICAgICBjb2xsYXBzZWRMaW5lczogMTUsXG4gICAgICAvLyAgIGxpbmVOdW1iZXJzOiAxLFxuICAgICAgbm90YXRpb25EaWZmOiB0cnVlLFxuICAgICAgbm90YXRpb25Gb2N1czogdHJ1ZSxcbiAgICAgIGhpZ2hsaWdodExpbmVzOiB0cnVlLFxuICAgICAgbm90YXRpb25IaWdobGlnaHQ6IHRydWUsXG4gICAgICBub3RhdGlvbkVycm9yTGV2ZWw6IHRydWUsXG4gICAgICBub3RhdGlvbldvcmRIaWdobGlnaHQ6IHRydWUsXG4gICAgICAvLyAgIGxhbmdzOiBbJ3NxbCcsICdweXRob24nLCAnamF2YScsICdqYXZhc2NyaXB0JywgJ2MnLCAnYyMnLCAnYysrJywgJ2h0bWwnLCAnY3NzJyxcbiAgICAgIC8vICAgICAnYmFzaCcsICdydXN0JywgJ3BocCcsICdyJywgJ2NtZCcsICd5YW1sJywgJ21hcmtkb3duJywgJ2h0dHAnLCAnY21ha2UnLCAnbWF0bGFiJyxcbiAgICAgIC8vICAgICAncGxzcWwnLCAnaW5pJywgXCJmb3J0cmFuLWZyZWUtZm9ybVwiLCBcImZvcnRyYW4tZml4ZWQtZm9ybVwiLCAnZ28nLCAndnVlJywgJ3RleCcsICd0ZXh0JywgJ2NzdicsICdmaXNoJyxcbiAgICAgIC8vICAgICAnbWFrZWZpbGUnLCAndHlwZXNjcmlwdCcsXG4gICAgICAvLyAgIF0sXG4gICAgICAvLyBsYW5nQWxpYXM6IHtcbiAgICAgIC8vICAgW1wiZm9ydHJhblwiXTogXCJmb3J0cmFuLWZyZWUtZm9ybVwiLFxuICAgICAgLy8gfSxcbiAgICAgIHRoZW1lOiBcIm1vbm9rYWlcIixcbiAgICAgIC8vIHRoZW1lczoge1xuICAgICAgLy8gICBsaWdodDogXCJtb25va2FpXCIsXG4gICAgICAvLyAgIGRhcms6IFwib25lLWRhcmstcHJvXCIsXG4gICAgICAvLyB9LFxuICAgIH0sXG4gICAgdlByZTogdHJ1ZSxcbiAgfSxcblxuICAvLyBcdTU3MjhcdThGRDlcdTkxQ0NcdTkxNERcdTdGNkVcdTRFM0JcdTk4OThcdTYzRDBcdTRGOUJcdTc2ODRcdTYzRDJcdTRFRjZcbiAgcGx1Z2luczoge1xuICAgIGljb246IHtcbiAgICAgIHByZWZpeDogXCJpY29uZm9udCBpY29uLVwiLFxuICAgICAgYXNzZXRzOiBbXG4gICAgICAgIC8vXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL2ljb24vaWNvbmZvbnQuY3NzXCIsXG4gICAgICAgIFwiLy9hdC5hbGljZG4uY29tL3QvYy9mb250XzQ4NTM1MjVfeWd4dng2c28xOS5jc3NcIlxuICAgICAgXSxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgbWF4U3VnZ2VzdGlvbnM6IDMyLFxuICAgICAgaG90S2V5czogW10sXG4gICAgICAvLyBcdTRGNjBcdTc2ODRcdTkwMDlcdTk4NzlcbiAgICAgIGxvY2FsZXM6IHtcbiAgICAgICAgXCIvXCI6IHtcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJcdTY0MUNcdTdEMjJcIixcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYmxvZzogdHJ1ZSxcblxuICAgIC8vIFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTI0RFx1OTcwMFx1NUI4OVx1ODhDNSBAd2FsaW5lL2NsaWVudFxuICAgIC8vIFx1OEI2Nlx1NTQ0QTogXHU4RkQ5XHU2NjJGXHU0RTAwXHU0RTJBXHU0RUM1XHU0RjlCXHU2RjE0XHU3OTNBXHU3Njg0XHU2RDRCXHU4QkQ1XHU2NzBEXHU1MkExXHVGRjBDXHU1NzI4XHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU0RTJEXHU4QkY3XHU4MUVBXHU4ODRDXHU5MEU4XHU3RjcyXHU1RTc2XHU0RjdGXHU3NTI4XHU4MUVBXHU1REYxXHU3Njg0XHU2NzBEXHU1MkExXHVGRjAxXG4gICAgY29tbWVudDoge1xuICAgICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXG4gICAgICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly9jb21tZW50cy5weXRoaWFyb290LmNvbS9cIixcbiAgICAgIHJlYWN0aW9uOiBbXG4gICAgICAgICdodHRwczovL3B5dGhpYXJvb3QuY29tL1dhbGluZS90aWViYS90aWViYV9hZ3JlZS5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9weXRoaWFyb290LmNvbS9XYWxpbmUvdGllYmEvdGllYmFfc3VuZ2xhc3Nlcy5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9weXRoaWFyb290LmNvbS9XYWxpbmUvdGllYmEvdGllYmFfcGlja19ub3NlLnBuZycsXG4gICAgICAgICdodHRwczovL3B5dGhpYXJvb3QuY29tL1dhbGluZS90aWViYS90aWViYV9hd2t3YXJkLnBuZycsXG4gICAgICAgICdodHRwczovL3B5dGhpYXJvb3QuY29tL1dhbGluZS90aWViYS8xZjYxMy5wbmcnLFxuICAgICAgICAnaHR0cHM6Ly9weXRoaWFyb290LmNvbS9XYWxpbmUvdGllYmEvMWY2MGYucG5nJyxcbiAgICAgIF0sXG4gICAgICBjb21tZW50OiB0cnVlLCAvLyBcdThCQzRcdThCQkFcdTY1NzBcdTdFREZcdThCQTFcbiAgICAgIHBhZ2V2aWV3OiB0cnVlLCAvLyBcdTZENEZcdTg5QzhcdTkxQ0ZcdTdFREZcdThCQTFcbiAgICAgIG5vQ29weXJpZ2h0OiB0cnVlLFxuICAgICAgZGFyazogXCJhdXRvXCIsXG5cbiAgICB9LFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcblxuICB9LFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1N0YXRpYy1TaXRlLUJ1aWxkL3B5dGhpYXJvb3QuY29tL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFN0YXRpYy1TaXRlLUJ1aWxkXFxcXHB5dGhpYXJvb3QuY29tXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TdGF0aWMtU2l0ZS1CdWlsZC9weXRoaWFyb290LmNvbS9zcmMvLnZ1ZXByZXNzL25hdmJhci50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcihbXG4gIFwiL1wiLFxuLy8ge1xuLy8gICB0ZXh0OiBcImRlbW9cIixcbi8vICAgaWNvbjogXCJibG9nXCIsXG4vLyAgIGNoaWxkcmVuOiBbXG4vLyAgICAgeyB0ZXh0OiBcImRpc2FibGVcIiwgIGljb246IFwidGFvemlcIiwgbGluazogXCIvZGVtby9kaXNhYmxlLm1kXCIgfSxcbi8vICAgICB7IHRleHQ6IFwiZW5jcnlwdFwiLCBpY29uOiBcImV4ZXJjaXNlXCIsIGxpbms6IFwiZGVtby9lbmNyeXB0Lm1kXCIgfSxcbi8vICAgICB7IHRleHQ6IFwibGF5b3V0XCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcImRlbW8vbGF5b3V0Lm1kXCJ9LFxuLy8gICBdXG4gIFxuLy8gfSxcbntcbiAgdGV4dDogXCJcdTdGMTZcdTdBMEJcIiwgXG4gIGljb246IFwiYmlhbmNoZW5nLTAxXCIsIFxuICBjaGlsZHJlbjogW1xuICAgIHt0ZXh0OiBcIlN0YXRpYyB3ZWJzaXRlIGJ1aWxkaW5nLWJsb2dcIiwgaWNvbjpcImJva2VcIiwgbGluazogXCIvcHJvZ3JhbW1pbmcvc3RhdGljLXdlYnNpdGUtYmxvZy9cIn0sXG4gICAge3RleHQ6IFwiUHl0aG9uXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL3Byb2dyYW1taW5nL3B5dGhvbi9cIn0sXG4gICAge3RleHQ6IFwiVGhpbmtEU1BcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIvcHJvZ3JhbW1pbmcvVGhpbmtEU1AvXCJ9LFxuXG4gIF0sXG5cbn0sXG5cbnt0ZXh0OiBcIlx1NEVCQVx1NURFNVx1ODAzM1x1ODcxN1wiLCBpY29uOiBcInJlbmdvbmdlcndvc2hlbnFpbmdcIiwgbGluazogXCIjXCJ9LFxue3RleHQ6IFwiXHU4QkVEXHU5N0YzXHU1QjY2XCIsIGljb246IFwic2hlbmdib3l1eWlueGlhb3hpXCIsIGxpbms6IFwiI1wifSxcbntcbiAgdGV4dDogXCJcdTdGRkJcdThCRDFcIiwgXG4gIGljb246IFwiZmFueWlcIiwgXG4gIGNoaWxkcmVuOltcbiAgICB7dGV4dDpcIlx1OEJDRFx1NkM0N1wiLCBpY29uOlwiY2lodWliZW5cIiwgbGluazpcIi90cmFuc2xhdGlvbi92b2NhYnVsYXJ5L1wifSxcbiAgICB7dGV4dDpcIlBla2lcIiwgaWNvbjpcImZhbnlpXCIsIGxpbms6XCIvdHJhbnNsYXRpb24vcGVraS9cIn1cbiAgXSBcbn0sXG57dGV4dDogXCJcdThGRDBcdTUyQThcIiwgaWNvbjpcImppYW5zaGVuZmFuZ1wiLCBsaW5rOiBcIi9zcG9ydHMvXCJ9LFxue3RleHQ6IFwiXHU5NjA1XHU4QkZCXCIsIGljb246IFwieXVlZHVcIiwgbGluazogXCIvcmVhZGluZy9cIn0sXG4gIFxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1N0YXRpYy1TaXRlLUJ1aWxkL3B5dGhpYXJvb3QuY29tL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFN0YXRpYy1TaXRlLUJ1aWxkXFxcXHB5dGhpYXJvb3QuY29tXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU3RhdGljLVNpdGUtQnVpbGQvcHl0aGlhcm9vdC5jb20vc3JjLy52dWVwcmVzcy9zaWRlYmFyLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIoe1xuICAvLyBcIi9cIjogXCJzdHJ1Y3R1cmVcIiwgICAgICAgLy9cdThGRDlcdTY2MkZcdTlFRDhcdThCQTQgc3JjIFx1NjU4N1x1NEVGNlx1NTkzOVx1NEUwQlx1NjI0MFx1NjcwOVx1NjU4N1x1NEVGNlx1NTkzOVx1ODFFQVx1NTJBOFx1NjM5Mlx1NUU4RlxuXG4gIFwiL3Byb2dyYW1taW5nL1wiOiBcInN0cnVjdHVyZVwiLCAvL1x1N0YxNlx1N0EwQlx1NEUzQlx1ODNEQ1x1NTM1NVx1NjgwRlxuIFxuICBcbiAgXCIvc3BvcnRzL1wiOiBcInN0cnVjdHVyZVwiLCAvL1x1OEZEMFx1NTJBOFxuXG4gIC8vIFwiL1wiOiBbXG4gIC8vICAge1xuICAvLyAgICAgdGV4dDogXCJcdTdGMTZcdTdBMEJcIixcbiAgLy8gICAgIGljb246IFwiYmlhbmNoZW5nLTAxXCIsXG4gIC8vICAgICBwcmVmaXg6IFwiL3Byb2dyYW1taW5nL3B5dGhvblwiLFxuICAvLyAgICAgY2hpbGRyZW46IFtcbiAgLy8gICAgICAgXCIwMS12YXJpYWJsZVwiLFxuICAvLyAgICAgXVxuICAvLyAgIH0sXG4gIC8vICAge1xuICAvLyAgICAgdGV4dDogXCJXZWJcIixcbiAgLy8gICAgIGljb246IFwic2l0ZVwiLFxuICAvLyAgICAgcHJlZml4OiBcIi9zdGF0aWMtd2Vic2l0ZS1ibG9nL1wiLFxuICAvLyAgICAgY2hpbGRyZW46IFtcbiAgLy8gICAgICAgXCJhcnRpY2xlLXR5cG9yYVwiLFxuICAvLyAgICAgXVxuICAvLyAgIH1cbiAgLy8gXVxufSk7XG4iXSwKICAibWFwcGluZ3Mi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
