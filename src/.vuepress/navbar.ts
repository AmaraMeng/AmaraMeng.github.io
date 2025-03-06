import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
{
  text: "demo",
  icon: "blog",
  children: [
    { text: "disable",  icon: "taozi", link: "/demo/disable.md" },
    { text: "encrypt", icon: "exercise", link: "demo/encrypt.md" },
    { text: "layout", icon: "blog", link: "demo/layout.md"},
  ]
    
  
}
  
]);
