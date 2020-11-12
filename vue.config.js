/*
 * @Author: your name
 * @Date: 2020-11-03 21:16:12
 * @LastEditTime: 2020-11-12 13:13:45
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
        }
      }
    }
  }
};
