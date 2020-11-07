<!--
 * @Author: your name
 * @Date: 2020-11-06 15:03:14
 * @LastEditTime: 2020-11-07 19:54:44
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
          <el-button type="primary" @click="edit(tableData.row)"
            >编辑</el-button
          >
          <el-button type="danger" @click="deleta(tableData.row)">删除</el-button>
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
    /**
     * 获取数据并触发事件将被编辑的数据传给父组件
     * @param {object} editData 被点击的编辑行的数据对象
     */
    edit(editData) {
      this.$emit("editHnadler", editData);
    },
    /**
     * 获取数据并触发事件将被删除的数据传给父组件
     * @param {object} deleteData 被点击的编辑行的数据对象
     */
    deleta(deleteData) {
      this.$emit("deleteHandler", deleteData);
    }
  },
};
</script>
<style scoped>
</style>