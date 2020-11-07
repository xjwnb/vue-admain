<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-07 16:20:31
 * @LastEditors: Please set LastEditors
 * @Description: 表格页
 * @FilePath: \vue-admain\src\views\vab\table\index.vue
-->

<template>
  <div class="table">
    
    <!-- 用户列表表格 -->
    <UserTable :tableData="tableData" @editHnadler="editHnadler" @deleteHandler="deleteHandler" />
    <!-- 用户编辑对话框 -->
    <UserDialog
      v-if="editData !== null"
      :dialogVisible="dialogVisible"
      @cancelHandler="cancelHandler"
      @determineHnadler="determineHnadler"
      @closeHandler="closeHandler"
      @deleteHandler="deleteHandler"
      :editData="editData" />
    <!-- 用户删除对话框 -->
    <UserDeleteDialog 
      :dialogDeleteVisible="dialogDeleteVisible"
      :deletaData="deletaData"
      @cancelDeleteHandler="cancelDeleteHandler"
      @determineDeleteHandler="determineDeleteHandler"
      @deleteHandleClose="deleteHandleClose" />
  </div>
</template>

<script>
// 引入组件
import {
  // 用户表格
  UserTable,
  // 用户编辑对话框
  UserDialog,
  // 用户删除对话框
  UserDeleteDialog
} from "@/components";
import {
  // 获取调用用户数据列表的 http 方法
  getUserList,
  // 修改用户数据列表
  putUser,
} from "@/http/userList";
// 引入日期格式化工具方法
import { formatDateToYMD } from '@/utils/Date'

export default {
  name: "Table",
  components: {
    UserTable,
    UserDialog,
    UserDeleteDialog
  },
  data() {
    return {
      // 用户列表数组
      tableData: [],
      // 是否显示编辑对话框
      dialogVisible: false,
      // 是否显示删除对话框
      dialogDeleteVisible: false,
      // 被编辑的数据
      editData: null,
      // 被删除的数据
      deletaData: null,
    };
  },
  created() {},
  mounted() {
    // 获取用户列表数据
    this.getUsers();
  },
  methods: {
    /**
     * 发送请求获取用户列表数据
     */
    getUsers() {
      getUserList().then((res) => {
        this.tableData = res.userList;
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
      if (
        Object.prototype.toString.call(afterEditData) === "[object Object]"
      ) {
        // 获取编辑数据对象中的日期值
        let date = afterEditData.date;
        // 格式化日期并返回
        let formDate = formatDateToYMD(date.toString());
        afterEditData.date = formDate;
        console.log("格式化编辑对象后输出", afterEditData);
        // 发送 put 请求发送编辑数据
        putUser(afterEditData).then((res) => {
          console.log("putUser", res);
          if (res.status === 200 && res.statusText === "OK") {
            this.tableData = res.data;
          }
        });
      }
      this.dialogVisible = false;
    },
    /**
     * 触发对话框 X 事件
     */
    closeHandler() {
      this.dialogVisible = false;
    },
    deleteHandler(data) {
      this.deletaData = data;
      this.dialogDeleteVisible = true;
    },
    deleteHandleClose() {
      this.dialogDeleteVisible = false;
    },
    cancelDeleteHandler() {
      this.dialogDeleteVisible = false;
    },
    determineDeleteHandler() {
      this.dialogDeleteVisible = false;
    },
    
  },
};
</script>

<style scoped>
.table {
  padding: 2rem;
}
</style>