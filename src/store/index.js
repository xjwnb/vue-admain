/*
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 00:05:51
 * @LastEditors: Please set LastEditors
 * @Description: vuex 文件
 * @FilePath: \vue-admain\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户名
    username: "admin",
    // 密码
    password: "12345678"
  },
  getters: {
    /**
     * 获取 vuex 中的用户名
     * @param {object} state
     */
    getUserName(state) {
      return state.username;
    },
    /**
     * 获取 vuex 中的密码
     * @param {object} state
     */
    getPassword(state) {
      return state.password;
    },
    /**
     * 比较传入的用户名和密码与 store 中的是否一致。
     * @param {object} state
     * @param {object} param 传入的用户名和密码对象
     * @returns {number} number 相同返回 0，否则返回 -1
     */
    compareNameAndPassword: state => param => {
      if (Object.prototype.toString.call(param) === "[object Object]") {
        let username = state.username;
        let password = state.password;
        if (username === param.username && password === param.password) {
          return 0;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
