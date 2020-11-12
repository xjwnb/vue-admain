/*
 * @Author: your name
 * @Date: 2020-11-12 13:24:57
 * @LastEditTime: 2020-11-12 13:27:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\utils\IP\index.js
 */
/**
 * 从含有 ip 地址的字符串中获取 ip 地址并返回
 * @param {string} str 含有 ip 地址的字符串
 */
export function getIP(str) {
  let regexp = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;
  return regexp.exec(str)[0];
}
