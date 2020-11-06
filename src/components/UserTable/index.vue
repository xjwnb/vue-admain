<!--
 * @Author: your name
 * @Date: 2020-11-06 15:03:14
 * @LastEditTime: 2020-11-06 18:55:47
 * @LastEditors: Please set LastEditors
 * @Description: 表格
 * @FilePath: \vue-admain\src\components\Table\index.vue
-->
<template>
  <div class="user-table">
    <el-table :data="tableData" stripe style="width: 100%" border>
      <el-table-column prop="id" label="ID" width="200"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="age" label="年龄" width="200"></el-table-column>
      <el-table-column prop="date" label="生日" width="300"></el-table-column>
      <el-table-column prop="edit" label="编辑" width="300">
        <template slot-scope="tableData">
          <el-button type="primary" @click="edit(tableData.row, $event)"
            >编辑</el-button
          >
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: "table-component",
  components: {
  },
  props: {
    tableData: {
      type: Array,
    },
  },
  data() {
    return {
      // dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    edit(tableData, e) {
      /* // 显示对话框
      this.dialogVisible = true; */
      this.$emit("editHnadler");
      console.log(tableData, e);
    },
  },
};
</script>
<style scoped>
</style>