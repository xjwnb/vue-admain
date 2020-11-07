/*
 * @Author: your name
 * @Date: 2020-11-06 15:05:53
 * @LastEditTime: 2020-11-07 15:05:51
 * @LastEditors: Please set LastEditors
 * @Description: 统一进行组件导出
 * @FilePath: \vue-admain\src\components\index.js
 */

// Table表格
export const UserTable = () => import("./UserTable/index.vue");
// 用户编辑对话框
export const UserDialog = () => import("./UserDialog/index.vue");
// 用户删除对话框
export const UserDeleteDialog = () => import("./UserDeleteDialog/index.vue");
