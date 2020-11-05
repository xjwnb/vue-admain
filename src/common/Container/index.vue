<!--
 * @Author: your name
 * @Date: 2020-11-05 14:08:37
 * @LastEditTime: 2020-11-05 14:23:33
 * @LastEditors: Please set LastEditors
 * @Description: 布局容器
 * @FilePath: \vue-admain\src\common\Container\index.vue
-->
<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
  .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    position: absolute;
    bottom: 0px;
    top: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    position: absolute;
    top: 60px;
    left: 200px;
    bottom: 0px;
    right: 0px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
    position: relative;
  }
  
</style>