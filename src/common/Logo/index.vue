<!--
 * @Author: your name
 * @Date: 2020-11-05 15:31:22
 * @LastEditTime: 2020-11-05 16:58:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\Logo\index.vue
-->
<template>
  <div id="logo">
    <el-image
      :src="require('@/assets/images/logo.png')"
      flt="contain"
      :preview-src-list="srcList"
    ></el-image>
    <div class="logoText">
      <h1>vue-admin</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      srcList: [require("@/assets/images/logo.png")],
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
#logo {
  display: flex;
}
#logo .logoText {
  line-height: 60px;
  color: aqua;
  margin-left: 1rem;
}
.el-image {
  width: 80px;
  height: 60px;
}
</style>