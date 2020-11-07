/*
 * @Author: your name
 * @Date: 2020-11-07 12:31:42
 * @LastEditTime: 2020-11-07 19:20:14
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

/**
 * 通过 id 属性删除数组对象属性相同的 id 索引，并返回删除后的数组
 * @param {object} obj 包含 id 属性的对象数组
 * @param {number} id 要删除的 id 属性值
 */
export function deleteObjByID(obj, id) {
  let index = obj.findIndex(item => {
    if (item.id === id) {
      return true;
    }
  });
  obj.splice(index, 1);
  return obj;
};
let a = [{id:1, name: '小卡车'}, {id: 5, name: '蜘蛛侠'}];
console.log(deleteObjByID(a, 5));
