<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-07 19:52:30
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
    v-if="deletaData !== null"
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
  // 删除用户数据
  deleteUser
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
        // 发送 put 请求发送编辑数据
        putUser(afterEditData).then((res) => {
          if (res.status === 200 && res.statusText === "OK") {
            this.tableData = res.data;
          }
        });
      }
      this.dialogVisible = false;
    },
    /**
     * 触发编辑对话框 X 事件
     */
    closeHandler() {
      this.dialogVisible = false;
    },
    /**
     * 点击删除按钮事件
     */
    deleteHandler(data) {
      this.deletaData = data;
      this.dialogDeleteVisible = true;
    },
    /**
     * 触发删除对话框的 X 按钮
     */
    deleteHandleClose() {
      this.dialogDeleteVisible = false;
    },
    /**
     * 触发删除对话框中的取消按钮
     */
    cancelDeleteHandler() {
      this.dialogDeleteVisible = false;
    },
    /**
     * 触发删除对话框中的确定按钮
     * 发送 delete 请求删除数据并将返回数据赋值给 data 对象中的 tableData 属性
     */
    determineDeleteHandler() {
      this.dialogDeleteVisible = false;
      // let data = Object.assign({}, this.deletaData);
      // 发送删除数据请求
      deleteUser(this.deletaData.id).then(res => {
        // 判断是否成功，并且将返回的数据赋值给 data 对象中的 tableData 属性
        if (res.status === 200 && res.statusText === "OK") {
          this.tableData = res.data;
        }
      })
      // this.deletaData = null;
    },
    
  },
};
</script>

<style scoped>
.table {
  padding: 2rem;
}
</style>