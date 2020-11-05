/*
 * @Author: your name
 * @Date: 2020-11-05 20:08:20
 * @LastEditTime: 2020-11-05 20:11:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\mock\navBar\getNavBar.js
 */
import { mock } from 'mockjs';
import { navbarList } from './getNavBar'

// 获得导航
mock("http://localhost:8080/getNavBar", "get", function() {
  return {
    data: navbarList,
    status: 200,
    statusText: "OK"
  };
});
