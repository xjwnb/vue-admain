/*
 * @Author: your name
 * @Date: 2020-11-04 12:22:36
 * @LastEditTime: 2020-11-04 15:02:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\http\index.js
 */
// 引入 axios
import axios from "axios";
import { Message } from "element-ui";

function request(options) {
  return new Promise((resolve, reject) => {
    // 创建 axios 实例
    const instance = axios.create({
      baseURL: "http://localhost:8080",
      timeout: 100
    });
    // 请求拦截器
    instance.interceptors.request.use(
      config => {
        console.log(config);
        return config;
      },
      error => {
        console.log(error);
        // return error;
        Message.error(error);
      }
    );
    // 响应拦截器
    instance.interceptors.response.use(
      data => {
        console.log("response", data);
        return data;
      },
      error => {
        console.log(error);
        Message.error(error);
      }
    );

    instance(options)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default request;
