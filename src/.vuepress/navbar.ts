import { navbar } from "vuepress-theme-hope";

export default navbar([
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
  text: "编程", 
  icon: "biancheng-01", 
  children: [
    {text: "Static website building-blog", icon:"boke", link: "/programming/static-website-blog/"},
    {text: "Python", icon: "python", link: "/programming/python/"},
    {text: "ThinkDSP", icon: "python", link: "/programming/ThinkDSP/"},
    {text: "Math for AI", icon: "python", link: "/programming/math-for-ai/"}

  ],

},

{text: "人工耳蜗", icon: "rengongerwoshenqing", link: "#"},
{text: "语音学", icon: "shengboyuyinxiaoxi", link: "#"},
{
  text: "翻译", 
  icon: "fanyi", 
  children:[
    {text:"词汇", icon:"cihuiben", link:"/translation/vocabulary/"},
    {text:"Peki", icon:"fanyi", link:"/translation/peki/"}
  ] 
},
{text: "运动", icon:"jianshenfang", link: "/sports/"},
{
  text: "阅读", 
  icon: "yuedu", 
  children:[
    {text: "文献", icon: "yuedu", link: "/reading/literature/"},
    {text: "书籍", icon: "yuedu", link: "/reading/books/"}
  ]
},
  
]);
