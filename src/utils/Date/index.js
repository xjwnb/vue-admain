/*
 * @Author: your name
 * @Date: 2020-11-07 10:05:58
 * @LastEditTime: 2020-11-07 14:49:57
 * @LastEditors: Please set LastEditors
 * @Description: Date 工具方法
 * @FilePath: \vue-admain\src\utils\Date\index.js
 */

/**
 * 将日期字符串格式化为 yyyy-MM-dd 的格式并返回
 * @param {Date} date 日期类型
 * @returns {string} 格式为 yyyy-MM-dd
 */
export function formatDateToYMD(date) {
  let formatDate = new Date(date);
  let y = formatDate.getFullYear();
  let m = formatDate.getMonth() + 1;
  let d = formatDate.getDate();
  m < 10 ? m = "0" + m : m = m;
  d < 10 ? d = "0" + d : d = d;
  return `${y}-${m}-${d}`;
}
