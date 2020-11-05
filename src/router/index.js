/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 23:59:47
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
    // meta: ['username', 'password'],
    children: [
      {
        path: "index",
        name: "index",
        component: () => import("@/views/index/index.vue")
      }
    ]
    /*     name: 'Home',*/
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/vab",
    name: "vab",
    component: Layout,
    children: [
      {
        path: "table",
        name: "table",
        component: () => import("@/views/vab/Table/index.vue")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
