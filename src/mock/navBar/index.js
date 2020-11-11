/*
 * @Author: your name
 * @Date: 2020-11-05 20:04:59
 * @LastEditTime: 2020-11-11 16:07:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\mock\navBar\index.js
 */
export const navbarList = [
  {
    id: "1",
    path: "/",
    icon: "iconfont icon-shouye",
    title: "首页",
    children: null
  },
  {
    id: "2",
    path: "/vab",
    icon: "iconfont icon-zujian",
    title: "组件",
    children: [
      {
        id: "2-1",
        path: "/vab/table",
        icon: "iconfont icon-biaoge",
        title: "表格",
        children: null
      },
      {
        id: "2-2",
        path: "/vab/color",
        icon: "iconfont icon-yanse",
        title: "颜色",
        children: null
      },
      {
        id: "2-3",
        path: "/vab/progress",
        icon: "iconfont icon-jindutiao",
        title: "进度条",
        children: null
      },
      {
        id: "2-4",
        path: "/vab/timeline",
        icon: "iconfont icon-jindutiao",
        title: "时间线",
        children: null
      },
      {
        id: "2-5",
        path: "/vab/collapse",
        icon: "iconfont icon-jindutiao",
        title: "折叠面板",
        children: null
      },
      {
        id: "2-6",
        path: "/vab/carousel",
        icon: "iconfont icon-jindutiao",
        title: "跑马灯",
        children: null
      }
    ]
  },
  {
    id: "3",
    path: "/about",
    icon: "iconfont icon-wode2",
    title: "关于",
    children: null
  }
];
