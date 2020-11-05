/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 23:20:12
 * @LastEditors: Please set LastEditors
 * @Description: Vue 文件入口文件
 * @FilePath: \vue-admain\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
// 引入 icon
import '@/assets/icon/iconfont.css';
// 引入全局样式
import '@/assets/css/index.css';
// 引入路由
import router from "./router";
// 引入 vuex
import store from "./store";
// 引入 Element-UI 样式
import "element-ui/lib/theme-chalk/index.css";
// 按需引入 Element-UI 组件
import element from "@/plugins/element-ui";
// 引入 mock 数据
import '@/mock/userList';


// 测试 Mock 数据获取情况
import {
  getUserList
} from '@/http/userList';
getUserList().then(res => {
  console.log("请求-getUserList()", res);
  console.log(res.data);
});

// 安装 element 插件
Vue.use(element);

// 设置 $store
Vue.prototype.$store = store;
// 设置 localStorage
Vue.prototype.$localStorage = window.localStorage;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  console.log(to, from);
  if (to.name === "login") {
    console.log("login");
  }
  next();
});
