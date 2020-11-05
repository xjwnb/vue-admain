<!--
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-05 13:08:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\Home.vue
-->
<template>
  <div class="home">
    <router-link :to="{ name: 'login' }">登录</router-link>
  </div>
</template>

<script>
import { isLogin } from "@/utils/login";
import { TO_LOGIN_TIME_OUT_SECOND } from '@/const'

export default {
  name: "Home",
  components: {},
  data() {
    return {
      // 跳转登录定时器
      loginTimeout: null,
    };
  },
  created() {
    console.log(11111);
    // 是否登录
    this.loginState();
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
