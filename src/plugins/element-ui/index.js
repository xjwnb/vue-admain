/*
 * @Author: your name
 * @Date: 2020-11-03 21:08:56
 * @LastEditTime: 2020-11-11 16:38:00
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
  Divider,
  Table,
  TableColumn,
  Dialog,
  DatePicker,
  Progress,
  Collapse,
  CollapseItem,
  Timeline,
  TimelineItem,
  RadioGroup,
  Radio,
  Card,
  Carousel,
  CarouselItem,
  Message,
  MessageBox,
  Notification,
  Loading
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
    Vue.use(Divider);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Dialog);
    Vue.use(DatePicker);
    Vue.use(Progress);
    Vue.use(Collapse);
    Vue.use(CollapseItem);
    Vue.use(Timeline);
    Vue.use(TimelineItem);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Card);
    Vue.use(Carousel);
    Vue.use(CarouselItem);

    Vue.prototype.$message = Message;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$loading = Loading.service;
  }
};

export default element;
