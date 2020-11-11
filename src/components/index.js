/*
 * @Author: your name
 * @Date: 2020-11-06 15:05:53
 * @LastEditTime: 2020-11-11 16:35:48
 * @LastEditors: Please set LastEditors
 * @Description: 统一进行组件导出
 * @FilePath: \vue-admain\src\components\index.js
 */

/**
 * @/views/vab/Table
 * Table 表格页面
 */
// Table表格
export const UserTable = () => import("./UserTable/index.vue");
// 用户编辑对话框
export const UserDialog = () => import("./UserDialog/index.vue");
// 用户删除对话框
export const UserDeleteDialog = () => import("./UserDeleteDialog/index.vue");
// 用户添加数据对话框
export const UserAddDialog = () => import("./UserAddDialog/index.vue");

/**
 * @/views/vab/Color
 * Color 颜色页面
 */
// ColorDiv 颜色块
export const ColorDiv = () => import("./ColorDiv/index.vue");

/**
 * @/views/vab/Progress
 * Progress 进度条页面
 */
// ProgressDiv 进度条块
export const ProgressDiv = () => import("./ProgressDiv/index.vue");

/**
 * @/views/vab/Timeline
 * Timeline 时间线页面
 */
// TimelineDiv 时间线块
export const TimelineDiv = () => import("./TimelineDiv/index.vue");
// TimelineCustom 自定义时间线
export const TimelineCustom = () => import("./TimelineCustom/index.vue");

/**
 * @/views/vab/Collapse
 * Collapse 折叠面板
 */
export const CollapseDiv = () => import("./CollapseDiv/index.vue");

/**
 * @/views/vab/Carousel
 * Carousel 跑马灯页面
 */
// 跑马灯组件
export const CarouselDiv = () => import("./CarouselDiv/index.vue");
