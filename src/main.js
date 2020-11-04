/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-04 12:42:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
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

// 安装 element 插件
Vue.use(element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
