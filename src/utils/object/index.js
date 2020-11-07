/*
 * @Author: your name
 * @Date: 2020-11-07 12:31:42
 * @LastEditTime: 2020-11-07 14:28:28
 * @LastEditors: Please set LastEditors
 * @Description: 对象工具方法
 * @FilePath: \vue-admain\src\utils\object\index.js
 */

/**
 * 将传入的第一个参数的对象数组中的 id值 与 第二个参数的 id 值相同的元素替换成第二个参数，并返回替换后的参数
 * @param {array} replacedObj 
 * @param {object} replaceItem 
 * @returns {array} 被替换后的新对象数组
 */
export function getReplaceObjByItem(replacedObj, replaceItem) {
  let replaceID = replaceItem.id;
  let newObj = replacedObj.map(item => {
    if (item.id === replaceID) {
      return replaceItem;
    }
    return item;
  });
  return newObj;
}

let a = [{id: 1, name: 'xkc'}, {id: 2, name: 'zzx'}];
let b = {id: 2, name:"蜘蛛侠"};
getReplaceObjByItem(a, b);
