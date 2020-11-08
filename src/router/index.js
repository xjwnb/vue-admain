/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-08 14:38:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

const Layout = () => import("@/views/Layout.vue");
// 登录页面
const Login = resolve => require(["@/views/Login.vue"], resolve);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: 'index',
    redirect: "index",
    component: Layout,
    // meta: { pathName: "首页" },
    children: [
      {
        path: "index",
        name: "index",
        meta: { pathName: "首页" },
        component: () => import("@/views/index/index.vue")
      }
    ]
    /*     name: 'Home',*/
  },
  {
    path: "/login",
    name: "login",
    meta: { pathName: "登录" },
    component: Login
  },
  {
    path: "/vab",
    name: "vab",
    meta: { pathName: "组件" },
    component: Layout,
    children: [
      {
        path: "table",
        name: "table",
        meta: { pathName: "表格" },
        component: () => import("@/views/vab/Table/index.vue")
      },
      {
        path: "color",
        name: "color",
        meta: { pathName: "颜色" },
        component: () => import("@/views/vab/Color/index.vue")
      },
      {
        path: "about",
        name: 'about',
        meta: { pathName: "关于" },
        component: () => import("@/views/About.vue")
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
