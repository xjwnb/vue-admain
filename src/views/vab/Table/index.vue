<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-06 16:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\vab\table\index.vue
-->
<template>
  <div class="table">
    <!-- 用户列表表格 -->
    <table-component :tableData="tableData" />
  </div>
</template>

<script>
// 引入组件
import { TableComponent } from "@/components";
// 获取调用用户数据列表的 http 方法
import { getUserList } from "@/http/userList";

export default {
  name: "Table",
  components: {
    TableComponent,
  },
  data() {
    return {
      // 用户列表数组
      tableData: [],
    };
  },
  created() {},
  mounted() {
    getUserList().then((res) => {
      console.log("请求-getUserList()", res);
      console.log(res.data);
      this.tableData = res.data.userList;
    });
  },
};
</script>
<style scoped>
.table {
  padding: 2rem;
}
</style>