/*
 * @Author: your name
 * @Date: 2020-11-05 00:37:21
 * @LastEditTime: 2020-11-05 00:50:19
 * @LastEditors: Please set LastEditors
 * @Description: 登录工具
 * @FilePath: \vue-admain\src\utils\login\index.js
 */

// 引入 store
import store from "@/store";

/**
 * 判断是否已经登录，通过本地存储得知
 * @returns {boolean}  
 */
export function isLogin() {
  let localStorage = window.localStorage;
  let username = localStorage.getItem("username");
  let password = localStorage.getItem("password");
  if (username !== undefined && password !== undefined) {
    let { getUserName, getPassword } = store.getters;
    if (username === getUserName && password === getPassword) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
