<!--
 * @Author: your name
 * @Date: 2020-11-06 10:07:40
 * @LastEditTime: 2020-11-06 13:12:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\common\Breadcrumb\index.vue
-->
<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <template v-for="route in routeList" v-key="route.path">
        <el-breadcrumb-item v-if="route.meta.pathName">{{ route.meta.pathName }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: {
  },
  data() {
    return {
      nowRoute: this.$route,
    };
  },
  watch: {
    $route(to, from) {
      this.nowRoute = to;
    }
  },
  computed: {
    routeList() {
      let matched = this.nowRoute.matched;
      return matched;
    }
  },
  created() {
  },
  mounted() {},
};
</script>

<style scoped>
.el-breadcrumb span {
  font-size: 1rem;
}
.el-breadcrumb span:first-child {
  font-weight: bolder;
}
</style>