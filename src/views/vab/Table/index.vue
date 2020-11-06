<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-06 18:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\vab\table\index.vue
-->
<template>
  <div class="table">
    <!-- 用户列表表格 -->
    <UserTable :tableData="tableData" @editHnadler="editHnadler" />
    <UserDialog :dialogVisible="dialogVisible" @cancelHandler="cancelHandler" @determineHnadler="determineHnadler" />
  </div>
</template>

<script>
// 引入组件
import { 
  // 用户表格
  UserTable, 
  // 用户对话框
  UserDialog } from "@/components";
// 获取调用用户数据列表的 http 方法
import { getUserList } from "@/http/userList";

export default {
  name: "Table",
  components: {
    UserTable,
    UserDialog
  },
  data() {
    return {
      // 用户列表数组
      tableData: [],
      // 是否显示对话框
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {
    // 获取用户列表数据
    getUserList().then((res) => {
/*       console.log("请求-getUserList()", res);
      console.log(res.data); */
      this.tableData = res.data.userList;
    });

    
  },
  methods: {
    // 表格中的编辑事件
    editHnadler() {
      this.dialogVisible = true;
    },
    // 对话框中的取消操作
    cancelHandler() {
      this.dialogVisible = false;
    },
    // 对话框中的确定操作
    determineHnadler() {
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
.table {
  padding: 2rem;
}
</style>