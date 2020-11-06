<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-06 21:45:30
 * @LastEditors: Please set LastEditors
 * @Description: 表格页
 * @FilePath: \vue-admain\src\views\vab\table\index.vue
-->
<template>
  <div class="table">
    <!-- 用户列表表格 -->
    <UserTable :tableData="tableData" @editHnadler="editHnadler" />
    <UserDialog
      v-if="editData !== null"
      :dialogVisible="dialogVisible"
      @cancelHandler="cancelHandler"
      @determineHnadler="determineHnadler"
      @closeHandler="closeHandler"
      :editData="editData"
    />
  </div>
</template>

<script>
// 引入组件
import {
  // 用户表格
  UserTable,
  // 用户对话框
  UserDialog,
} from "@/components";
// 获取调用用户数据列表的 http 方法
import { getUserList } from "@/http/userList";

export default {
  name: "Table",
  components: {
    UserTable,
    UserDialog,
  },
  data() {
    return {
      // 用户列表数组
      tableData: [],
      // 是否显示对话框
      dialogVisible: false,
      // 被编辑的数据
      editData: null,
    };
  },
  created() {},
  mounted() {
    // 获取用户列表数据
    this.getUsers()
  },
  methods: {
    /**
     * 发送请求获取用户列表数据
     */
    getUsers() {
      getUserList().then((res) => {
        this.tableData = res.data.userList;
      });
    },

    /**
     * 表格中的编辑事件
     */
    editHnadler(editData) {
      this.dialogVisible = true;
      this.editData = editData;
    },
    /**
     * 对话框中的取消操作
     */
    cancelHandler() {
      this.dialogVisible = false;
    },
    /**
     * 对话框中的确定操作
     */
    determineHnadler(afterEditData) {
      this.dialogVisible = false;
      console.log(afterEditData);
    },
    /**
     * 触发对话框 X 事件
     */
    closeHandler() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style scoped>
.table {
  padding: 2rem;
}
</style>