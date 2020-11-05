<!--
 * @Author: your name
 * @Date: 2020-11-05 21:20:50
 * @LastEditTime: 2020-11-05 23:53:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\NavMenu\Menu.vue
-->
<template>
  <div>
    <template v-for="(menuItem, index) in navbarList" v-key="menuItem.id">
      <template v-if="menuItem.children">
        <el-submenu :index="menuItem.path">
          <template slot="title">
            <i :class="menuItem.icon"></i>
            <span>{{ menuItem.title }}</span>
          </template>
          <Menu :navbarList="menuItem.children"></Menu>
        </el-submenu>
      </template>
      <template v-else="!menuItem.children">
        <el-menu-item :index="menuItem.path">
          <i :class="menuItem.icon"></i>
          <span>{{ menuItem.title }}</span>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {},
  props: {
    navbarList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.navbarList);
  },
};
</script>

<style scoped>
.el-menu-item:hover {
  background: #00d8d6 !important;
  color: #fff !important;
}
.el-menu-item.is-active {
  background: #0fbcf9 !important;
  color: #fff !important;
}
</style>