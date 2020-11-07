/*
 * @Author: your name
 * @Date: 2020-11-04 13:23:54
 * @LastEditTime: 2020-11-06 22:05:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\http\userList.js
 */
import request from "./index";

export function getUserList() {
  return request({
    url: "/getUserList"
  });
}

export function putUser(data) {
  return request({
    url: "/putUser",
    method: "put",
    data
  })
}

