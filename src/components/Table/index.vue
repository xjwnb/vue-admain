<!--
 * @Author: your name
 * @Date: 2020-11-06 15:03:14
 * @LastEditTime: 2020-11-06 16:28:21
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: \vue-admain\src\components\Table\index.vue
-->
<template>
  <el-table :data="tableData" stripe style="width: 100%" border>
    <!-- <template v-for="table in tableData" v-key="table.id"> -->
    <el-table-column prop="id" label="ID" width="200"></el-table-column>
    <el-table-column prop="name" label="姓名" width="200"></el-table-column>
    <el-table-column prop="age" label="年龄" width="200"></el-table-column>
    <el-table-column prop="date" label="生日" width="300"></el-table-column>
    <el-table-column prop="edit" label="编辑" width="300">
      <el-button type="primary">编辑</el-button>
      <el-button type="danger">删除</el-button>
    </el-table-column
    >
  </el-table>
</template>

<script>
export default {
  name: "table-component",
  props: {
    tableData: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>