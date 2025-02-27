import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Pythia’s Root",
  description: " Snake my way to a content heart",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
