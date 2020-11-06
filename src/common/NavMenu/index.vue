<!--
 * @Author: your name
 * @Date: 2020-11-05 18:42:43
 * @LastEditTime: 2020-11-06 09:46:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\NavMenu\index.vue
-->
<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <!-- 侧边菜单 -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#808e9b"
          text-color="#ffffff"
          router
        >
          <Menu :navbarList="navbarList"></Menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: "NavMenu",
  components: {
    Menu,
  },
  props: {
    navbarList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped>

</style>