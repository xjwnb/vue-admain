/*
 * @Author: your name
 * @Date: 2020-11-03 21:16:12
 * @LastEditTime: 2020-11-17 11:48:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: {
        "/getIP": {
          target: "http://pv.sohu.com",
          changeOrigin: true,
          pathRewrite: {
            "^/getIP": ""
          }
        },
        "/api": {
          target: "http://127.0.0.1:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    }
  }
};
