/*
 * @Author: your name
 * @Date: 2020-11-09 11:33:36
 * @LastEditTime: 2020-11-09 13:39:05
 * @LastEditors: Please set LastEditors
 * @Description: 进度条对象数据
 * @FilePath: \vue-admain\src\mock\progress\index.js
 */
export const progressList = {
  linear_progress: [
    {
      id: "1-1",
      startNumber: 0,
      lastNumber: 30,
    },
    {
      id: "1-2",
      startNumber: 0,
      lastNumber: 60,
      status: "success"
    },
    {
      id: "1-3",
      startNumber: 0,
      lastNumber: 80,
      status: "warning"
    },
    {
      id: "1-4",
      startNumber: 0,
      lastNumber: 50,
      status: "exception"
    }
  ],
  percentage_progress: [
    {
      id: "2-1",
      startNumber: 0,
      lastNumber: 30,
      text_inside: true,
      stroke_width: 26,
    },
    {
      id: "2-2",
      startNumber: 0,
      lastNumber: 60,
      text_inside: true,
      stroke_width: 24,
      status: "success"
    },
    {
      id: "2-3",
      startNumber: 0,
      lastNumber: 80,
      text_inside: true,
      stroke_width: 22,
      status: "warning"
    },
    {
      id: "2-4",
      startNumber: 0,
      lastNumber: 50,
      text_inside: true,
      stroke_width: 20,
      status: "exception"
    }
  ],
};
