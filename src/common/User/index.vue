<!--
 * @Author: your name
 * @Date: 2020-11-05 16:29:45
 * @LastEditTime: 2020-11-07 20:16:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\User\User.vue
-->
<template>
  <div class="user">
    <!-- 头像 -->
    <el-avatar :src="require('@/assets/images/admin.png')"></el-avatar>
    <!-- 注销按钮 -->
    <el-button type="primary" @click="cancellation">注销</el-button>
  </div>
</template>

<script>
import { isLogin, isCancellation } from "@/utils/login";

export default {
  name: "User",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 登录注销
     */
    cancellation() {
      let islogin = isLogin();
      console.log(islogin);
      if (islogin) {
        let isCancel = isCancellation();
        if (isCancel) {
          this.$router.push({ name: "login" });
        }
      }
    },
  },
};
</script>
<style scoped>
.user {
  display: flex;
  align-items: center;
}
.el-avatar {
  margin: 0 1rem;
}
</style>