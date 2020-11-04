/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-04 15:00:30
 * @LastEditors: Please set LastEditors
 * @Description: Vue 文件入口文件
 * @FilePath: \vue-admain\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
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
});

// 安装 element 插件
Vue.use(element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
