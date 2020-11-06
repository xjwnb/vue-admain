/*
 * @Author: your name
 * @Date: 2020-11-06 15:05:53
 * @LastEditTime: 2020-11-06 17:27:19
 * @LastEditors: Please set LastEditors
 * @Description: 统一进行组件导出
 * @FilePath: \vue-admain\src\components\index.js
 */

// 导出Table表格
export const UserTable = () => import("./UserTable/index.vue");
export const UserDialog = () => import("./UserDialog/index.vue");
