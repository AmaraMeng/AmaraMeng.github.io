import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Pythia’s Root",
  description: " Snake my way to a content heart",

  theme,
  head: [
    ['link', {rel: 'icon', href: '/logo.jpg'}]
  ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
