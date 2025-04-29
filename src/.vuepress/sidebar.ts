import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // "/": "structure",       //这是默认 src 文件夹下所有文件夹自动排序

  "/programming/": "structure", //编程主菜单栏
 
  
  "/sports/": "structure", //运动

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
