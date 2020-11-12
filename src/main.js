/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-12 15:30:03
 * @LastEditors: Please set LastEditors
 * @Description: Vue 文件入口文件
 * @FilePath: \vue-admain\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
// 引入 clipboard
import clipboard from "clipboard";
// 引入 icon
import "@/assets/icon/iconfont.css";
// 引入全局样式
import "@/assets/css/index.css";
// 引入路由
import router from "./router";
// 引入 vuex
import store from "./store";
// 引入 Element-UI 样式
import "element-ui/lib/theme-chalk/index.css";
// 按需引入 Element-UI 组件
import element from "@/plugins/element-ui";
// 引入 mock 数据
import "@/mock/userList";
// 引入 animejs 动画库
import anime from "animejs";
// 引入 axios 
import axios from 'axios';

// vcarts 
// 引入 vcarts 
import VeLine from 'v-charts/lib/line.common'
import Histogram from 'v-charts/lib/histogram.common'
import Pie from 'v-charts/lib/pie.common'

// 
Vue.component(VeLine.name, VeLine);
Vue.component(Histogram.name, Histogram);
Vue.component(Pie.name, Pie);


// 安装 element 插件
Vue.use(element);

// 设置 $store
Vue.prototype.$store = store;
// 设置 localStorage
Vue.prototype.$localStorage = window.localStorage;
// 设置 clipboard
Vue.prototype.$clipboard = clipboard;
// 设置 anime 动画库
Vue.prototype.$anime = anime;
// 设置 axios 
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  console.log(to, from);
  // 修改页面标签名
  document.title = "vue-admin - " + to.meta.pathName;
  if (to.name === "login") {
    console.log("login");
  }
  next();
});
