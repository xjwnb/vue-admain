/*
 * @Author: your name
 * @Date: 2020-11-03 21:08:56
 * @LastEditTime: 2020-11-04 17:12:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\plugins\elementUI.js
 */

import { 
  Button,
  Form,
  FormItem,
  Input,
  Message
} from "element-ui";

const element = {
  install: Vue => {
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    

    Vue.prototype.$message = Message;
  }
};

export default element;
