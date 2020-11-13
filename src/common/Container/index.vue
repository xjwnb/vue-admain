<!--
 * @Author: your name
 * @Date: 2020-11-05 14:08:37
 * @LastEditTime: 2020-11-13 11:41:48
 * @LastEditors: Please set LastEditors
 * @Description: 布局容器
 * @FilePath: \vue-admain\src\common\Container\index.vue
-->
<template>
  <div>
    <!-- 布局容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <slot name="header"></slot>
      </el-header>
      <el-container>
        <!-- 侧边 -->
        <el-aside width="200px">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <!-- 主题 -->
          <slot name="breadcrumb"></slot>
          <!-- <transition name="el-zoom-in-top"> -->
          <div class="container-router-view">
            <router-view></router-view>
          </div>
          <!-- </transition> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  destroyed() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.el-header {
  background-color: #485460;
  color: #333;
}

.el-aside {
  background-color: #1e272e;
  color: #333;
  position: absolute;
  bottom: 0px;
  top: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
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
/* 路由容器 */
.container-router-view {
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border: 1px solid #ffffff;
  border-radius: 10px;
}
</style>