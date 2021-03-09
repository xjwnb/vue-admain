<!--
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2021-03-09 18:45:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\Home.vue
-->
<template>
  <div class="home">
    <Container>
      <!-- 头部 -->
      <template v-slot:header>
        <div class="header">
          <Logo />
          <User />
        </div>
      </template>
      <!-- 侧边 -->
      <template v-slot:aside>
        <div>
          <!-- 侧边导航栏 -->
          <!-- <router-link to="/vab/table">表格</router-link> -->
          <NavMenu :navbarList="navbarList" />
          <!-- <a href="https://beian.miit.gov.cn/" target="_blank">您的备案号</a> -->
          <a class="beian" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2021025153号-1</a>
        </div>
      </template>
      <!-- 面包屑 -->
      <template v-slot:breadcrumb>
        <Breadcrumb />
        <!-- 分割线 -->
        <el-divider></el-divider>
      </template>
      <!-- 内容 -->
      <!-- <template v-slot:main>
        <router-view></router-view>
      </template> -->
    </Container>
    <!-- <router-link :to="{ name: 'login' }">登录</router-link> -->
  </div>
</template>

<script>
// 引入工具方法
import {
  // 是否登录
  isLogin,
} from "@/utils/login";
// 引入常量
import { TO_LOGIN_TIME_OUT_SECOND } from "@/const";
// 引入布局容器组件
import { Container, Logo, User, NavMenu, Breadcrumb } from "@/common";
// 引入导航数据
import { navbarList } from "@/mock/navBar";

export default {
  name: "Home",
  components: {
    // 布局容器
    Container,
    // 顶部左侧 Logo
    Logo,
    // 顶部右侧 user
    User,
    // 侧边导航栏
    NavMenu,
    // 面包屑
    Breadcrumb,
  },
  data() {
    return {
      // 跳转登录定时器
      loginTimeout: null,
      // 导航列表
      navbarList,
      /*  // 跳转的路由
      toRoute: this.$route */
    };
  },
  watch: {
    /* $route(to, from) {
      console.log(to);
      this.toRoute = to;
      console.log(this.toRoute);
    } */
  },
  created() {
    // 是否登录
    this.loginState();
  },
  mounted() {
    // console.log(navbarList);
  },
  updated() {},
  methods: {
    /**
     * 登录状态，没登陆这自动跳转到登录页
     *
     */
    loginState() {
      // 登录状态
      let islogin = isLogin();
      let _this = this;
      if (!islogin) {
        // 提示请重新登录
        this.$message({ message: "请重新登陆登录！", type: "warning" });
        // 3秒后跳转到登录页面
        _this.loginTimeout = window.setTimeout(function () {
          _this.$router.push({ name: "login" });
        }, TO_LOGIN_TIME_OUT_SECOND);
      }
    },
  },
  destroyed() {
    window.clearTimeout(this.loginTimeout);
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
/* 分割线 */
.el-divider {
  background-color: #7ed6df !important;
}
.beian {
  color: #ffffff;
  text-decoration: none;
}
</style>
