/*
 * @Author: your name
 * @Date: 2020-11-04 13:00:05
 * @LastEditTime: 2020-11-04 15:37:35
 * @LastEditors: Please set LastEditors
 * @Description: Mock 用户列表配置文件
 * @FilePath: \vue-admain\src\mock\index.js
 */
// 引入 Mock
import Mock, { mock, Random } from "mockjs";
// 引入所需常量
import {
  // 随机用户对象数量最小值
  USER_COUNT_MIN,
  // 随机用户对象数量最大值
  USER_COUNT_MAX,
  // 随机用户年龄最小值
  USER_AGE_MIN,
  // 随机用户年龄最大值
  USER_AGE_MAX
} from "@/const";

/**
 * 生成返回 Mock 规则的用户列表对象
 * @returns {Object} 用户列表对象
 */
function getUserList() {
  // 生成的随机用户列表数组
  let userList = generUserRandom(USER_COUNT_MIN, USER_COUNT_MAX, USER_AGE_MIN, USER_AGE_MAX);
  const users = Mock.mock({
    userList: JSON.parse(JSON.stringify(userList))
  });

  return users;
}



/**
 * 用户类
 * @constructor
 * @param {String} name 用户名
 * @param {String} age 年龄
 */
function User(name, age) {
  this.setName(name);
  this.setAge(age);
}
User.prototype.getName = function() {
  return this.name;
};
User.prototype.setName = function(newName) {
  this.name = newName;
};
User.prototype.getAge = function() {
  return this.age;
};
User.prototype.setAge = function(newAge) {
  this.age = newAge;
};

/**
 * 创建并返回随机用户数组
 * @param {Number} userCountMin 随机用户对象数量最小值
 * @param {Number} userCountMax 随机用户对象数量最大值
 * @param {Number} ageMin 随机用户年龄最小值
 * @param {Number} ageMax 随机用户年龄最大值
 * @returns {Array} 用户对象数组
 */
function generUserRandom(userCountMin, userCountMax, ageMin, ageMax) {
  let userCount = Math.floor(Math.random() * userCountMax + userCountMin);
  let userList = [];
  for (let i = 0; i < userCount; i++) {
    const user = new User();
    user.setName(Random.cname());
    user.setAge(Math.floor(Math.random() * ageMax + ageMin));
    userList.push(user);
  }
  return userList;
}

mock("http://localhost:8080/getUserList", "get", getUserList);