/*
 * @Author: your name
 * @Date: 2020-11-03 21:08:56
 * @LastEditTime: 2020-11-03 21:37:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\plugins\elementUI.js
 */

import { 
  Button 
} from "element-ui";

const element = {
  install: Vue => {
    Vue.use(Button);
  }
};

export default element;
