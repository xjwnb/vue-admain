<!--
 * @Author: your name
 * @Date: 2020-11-06 10:07:40
 * @LastEditTime: 2020-11-06 10:09:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\Breadcrumb\index.vue
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
</style>