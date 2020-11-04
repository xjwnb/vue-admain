/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 00:34:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 登录页面
const Login = resolve => require(['@/views/Login.vue'], resolve);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    meta: ['username', 'password'],
/*     name: 'Home',*/
    component: Home 
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/login'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
