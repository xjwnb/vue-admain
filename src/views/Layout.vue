<!--
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 21:32:28
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
          <!-- <router-link to="/vab/table">表格</router-link> -->
          <NavMenu :navbarList="navbarList" />
        </div>
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
import { Container, Logo, User, NavMenu } from "@/common";
// 引入导航数据
import { navbarList } from '@/mock/navBar'

export default {
  name: "Home",
  components: {
    Container,
    Logo,
    User,
    NavMenu
  },
  data() {
    return {
      // 跳转登录定时器
      loginTimeout: null,
      // 导航列表
      navbarList,
    };
  },
  created() {
    // 是否登录
    this.loginState();
  },
  mounted() {
    // console.log(navbarList);
  },
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
</style>
