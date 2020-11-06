/*
 * @Author: your name
 * @Date: 2020-11-03 21:08:56
 * @LastEditTime: 2020-11-06 11:09:38
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
  Row,
  Col,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Breadcrumb,
  BreadcrumbItem,
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
    Vue.use(Row);
    Vue.use(Col);
    Vue.use(Menu);
    Vue.use(MenuItem);
    Vue.use(MenuItemGroup);
    Vue.use(Submenu);
    Vue.use(Breadcrumb);
    Vue.use(BreadcrumbItem);
    

    Vue.prototype.$message = Message;
  }
};

export default element;
