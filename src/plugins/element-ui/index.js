/*
 * @Author: your name
 * @Date: 2020-11-03 21:08:56
 * @LastEditTime: 2020-11-05 16:33:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\plugins\elementUI.js
 */

import { 
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Image,
  Avatar,
  Message
} from "element-ui";

const element = {
  install: Vue => {
    Vue.use(Button);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Input);
    Vue.use(Container);
    Vue.use(Header);
    Vue.use(Aside);
    Vue.use(Main);
    Vue.use(Image);
    Vue.use(Avatar);
    

    Vue.prototype.$message = Message;
  }
};

export default element;
