/*
 * @Author: your name
 * @Date: 2020-11-04 13:00:05
 * @LastEditTime: 2020-11-07 14:27:42
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
// 引入对象工具方法
import {
  getReplaceObjByItem
} from '@/utils/object'

// 用户初始化全局 ID
let globalID = 0;
// 全部的用户列表类数组
let globalUser = [];

/**
 * 生成返回 Mock 规则的用户列表对象
 * @returns {Object} 用户列表对象
 */
function getUserList() {
  // 生成的随机用户列表数组
  let userList = generUserRandom(
    USER_COUNT_MIN,
    USER_COUNT_MAX,
    USER_AGE_MIN,
    USER_AGE_MAX
  );
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
 * @param {number} id ID值
 */
function User(name, age) {
  // ID
  this.id = ++ globalID;
  // 用户名
  this.setName(name);
  // 年龄
  this.setAge(age);
  // 生日
  this.date = Random.date("yyyy-MM-dd");
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
User.prototype.getID = function() {
  return this.id;
};
User.prototype.getDate = function() {
  return this.date;
};
User.prototype.setDate = function(newDate) {
  this.date = newDate;
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
    globalUser.push(user);
    userList.push(user);
  }
  // 重置 globalID 归零
  globalID = 0;
  return userList;
}

// 请求用户数据
mock("http://localhost:8080/getUserList", "get", getUserList);


console.log("globalUser", globalUser);

// put 修改用户数据
mock("http://localhost:8080/putUser", "put", function(options) {
  let option = JSON.parse(options.body);
  let newUserList = getReplaceObjByItem(globalUser, option);
  console.log(newUserList);
  return {
    status: 200, 
    statusText: "OK",
    data: newUserList
  };
});