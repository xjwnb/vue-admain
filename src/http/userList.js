/*
 * @Author: your name
 * @Date: 2020-11-04 13:23:54
 * @LastEditTime: 2020-11-08 12:25:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\http\userList.js
 */
import request from "./index";

/**
 * get 获取用户数据
 */
export function getUserList() {
  return request({
    url: "/getUserList"
  });
}

/**
 * put 发送数据修改
 * @param {object}} data 提交修改用户数据
 */
export function putUser(data) {
  return request({
    url: "/putUser",
    method: "put",
    data
  });
}

/**
 * delete 发送删除数据
 * @param {number} id 删除的 id
 */
export function deleteUser(id) {
  return request({
    url: "/deleteUser",
    method: "delete",
    data: {
      id
    }
  });
}

/**
 * post 添加用户数据
 * @param {object} user 添加的用户数据对象
 */
export function postUser(user) {
  return request({
    url: "/postUser",
    method: "post",
    data: {
      user
    }
  });
} 
