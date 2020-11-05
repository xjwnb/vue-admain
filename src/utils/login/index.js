/*
 * @Author: your name
 * @Date: 2020-11-05 00:37:21
 * @LastEditTime: 2020-11-05 16:54:33
 * @LastEditors: Please set LastEditors
 * @Description: 登录工具
 * @FilePath: \vue-admain\src\utils\login\index.js
 */

// 引入 store
import store from "@/store";

// 本地存储
let localStorage = window.localStorage;


/**
 * 判断是否已经登录，通过本地存储得知
 * @returns {boolean}  
 */
export function isLogin() {
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

/**
 * 登录注销
 * @returns {boolean} 成功注销返回 true ，否则返回 false
 */
export function isCancellation() {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  if (!localStorage.getItem("username") && !localStorage.getItem("password")) {
    return true;
  } else {
    return false;
  }
}
