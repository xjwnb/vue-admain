/*
 * @Author: your name
 * @Date: 2020-11-10 19:53:03
 * @LastEditTime: 2020-11-10 19:59:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\jsonserver\server.js
 */
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running!");
});
