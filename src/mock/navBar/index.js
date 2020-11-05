/*
 * @Author: your name
 * @Date: 2020-11-05 20:04:59
 * @LastEditTime: 2020-11-05 23:25:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\mock\navBar\index.js
 */
export const navbarList = [
  {
    id: '1',
    path: '/',
    icon: 'iconfont icon-shouye',
    title: '首页',
    children: null
  },
  {
    id:'2',
    path: '/vab',
    icon: 'iconfont icon-zujian',
    title: '组件',
    children: [
      {
        id: "2-1",
        path: '/vab/table',
        icon: 'iconfont icon-biaoge',
        title: '表格',
        children: null
      }
    ]
  }
]