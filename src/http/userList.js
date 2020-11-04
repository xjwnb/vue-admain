/*
 * @Author: your name
 * @Date: 2020-11-04 13:23:54
 * @LastEditTime: 2020-11-04 13:29:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\http\userList.js
 */
import request from "./index";

function getUserList() {
  return request({
    url: "/getUserList"
  });
}

export { 
  getUserList
};
