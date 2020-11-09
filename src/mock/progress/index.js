/*
 * @Author: your name
 * @Date: 2020-11-09 11:33:36
 * @LastEditTime: 2020-11-09 13:29:14
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
  // custom_progress: [
  //   {
  //     id: "3-1",
  //     startNumber: 0,
  //     lastNumber: 100,
  //     color: "#00a8ff"
  //   },
  //   {
  //     id: "3-2",
  //     startNumber: 0,
  //     lastNumber: 100,
  //     // color: 
  //   },
  //   {
  //     id: "3-3",
  //     startNumber: 0,
  //     lastNumber: 100,
  //     /* color: [
  //       { color: "#f56c6c", percentage: 20 },
  //       { color: "#e6a23c", percentage: 40 },
  //       { color: "#5cb87a", percentage: 60 },
  //       { color: "#1989fa", percentage: 80 },
  //       { color: "#6f7ad3", percentage: 100 }
  //     ] */
  //   }
  // ]
};

/**
 * 自定义颜色方法
 */
function customColorMethod() {
  if (percentage < 30) {
    return "#909399";
  } else if (percentage < 70) {
    return "#e6a23c";
  } else {
    return "#67c23a";
  }
}
