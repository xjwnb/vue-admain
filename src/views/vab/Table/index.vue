<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-08 13:02:22
 * @LastEditors: Please set LastEditors
 * @Description: 表格页
 * @FilePath: \vue-admain\src\views\vab\table\index.vue
-->

<template>
  <div class="table">
    <!-- 用户列表表格 -->
    <UserTable
      :tableData="tableData"
      @editHnadler="editHnadler"
      @deleteHandler="deleteHandler"
    />
    <!-- 用户编辑对话框 -->
    <UserDialog
      v-if="editData !== null"
      :dialogVisible="dialogVisible"
      @cancelHandler="cancelHandler"
      @determineHnadler="determineHnadler"
      @closeHandler="closeHandler"
      @deleteHandler="deleteHandler"
      :editData="editData"
    />
    <!-- 用户删除对话框 -->
    <UserDeleteDialog
      v-if="deletaData !== null"
      :dialogDeleteVisible="dialogDeleteVisible"
      :deletaData="deletaData"
      @cancelDeleteHandler="cancelDeleteHandler"
      @determineDeleteHandler="determineDeleteHandler"
      @deleteHandleClose="deleteHandleClose"
    />

    <el-button
      type="primary"
      icon="el-icon-edit"
      circle
      @click="addHandler"
    ></el-button>
    <UserAddDialog
      :dialogAddVisible="dialogAddVisible"
      @handleAddClose="handleAddClose"
      @cancelAddHandler="cancelAddHandler"
      @determineAddHandler="determineAddHandler"
      :clearAddForm="clearAddForm"
    />
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
  UserDeleteDialog,
  // 表格添加数据对话框
  UserAddDialog,
} from "@/components";
import {
  // 获取调用用户数据列表的 http 方法
  getUserList,
  // 修改用户数据列表
  putUser,
  // 删除用户数据
  deleteUser,
  // 添加用户数据
  postUser,
} from "@/http/userList";
// 引入日期格式化工具方法
import { formatDateToYMD } from "@/utils/Date";

export default {
  name: "Table",
  components: {
    // 用户表格
    UserTable,
    // 用户编辑对话框
    UserDialog,
    // 用户删除对话框
    UserDeleteDialog,
    // 表格添加数据对话框
    UserAddDialog,
  },
  data() {
    return {
      // 用户列表数组
      tableData: [],
      // 是否显示编辑对话框
      dialogVisible: false,
      // 是否显示删除对话框
      dialogDeleteVisible: false,
      // 控制是否显示用户添加数据对话框
      dialogAddVisible: false,
      // 被编辑的数据
      editData: null,
      // 被删除的数据
      deletaData: null,
      // 清除添加对话框中数据
      clearAddForm: false,
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
      if (Object.prototype.toString.call(afterEditData) === "[object Object]") {
        // 获取编辑数据对象中的日期值
        let date = afterEditData.date;
        // 格式化日期并返回
        let formDate = formatDateToYMD(date.toString());
        afterEditData.date = formDate;
        // 发送 put 请求发送编辑数据
        putUser(afterEditData).then((res) => {
          if (res.status === 200 && res.statusText === "OK") {
            this.tableData = res.data;
            this.$message({ type: "success", message: "成功编辑用户数据！" });
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
      deleteUser(this.deletaData.id).then((res) => {
        // 判断是否成功，并且将返回的数据赋值给 data 对象中的 tableData 属性
        if (res.status === 200 && res.statusText === "OK") {
          this.tableData = res.data;
          this.$message({ type: "success", message: "成功删除用户数据！" });
        }
      });
      // this.deletaData = null;
    },

    /**
     * 点击用户数据添加按钮事件
     */
    addHandler() {
      this.dialogAddVisible = true;
    },
    /**
     * 点击添加用户数据对话框中的 X 按钮事件
     */
    handleAddClose() {
      this.dialogAddVisible = false;
    },
    /**
     * 点击添加数据对话框中取消添加数据按钮
     */
    cancelAddHandler() {
      this.dialogAddVisible = false;
    },
    /**
     * 点击添加数据对话框中确定添加数据按钮
     */
    determineAddHandler(addForm) {
      // 拷贝一份添加用户对象数据
      let copyAddForm = Object.assign({}, addForm);
      // 获得拷贝后的日期
      let date = copyAddForm.date;
      // 获得格式化后的日期
      let formatDate = formatDateToYMD(date.toString());
      // 将原来的日期设置为格式化后的日期
      copyAddForm.date = formatDate;
      // post 发送 http 请求添加数据
      postUser(copyAddForm).then((res) => {
        console.log(res);
        if (res.status === 201 && res.statusText === "OK") {
          console.log(res, "通过");
          // 重新渲染表格
          this.tableData = res.data;
          // 成功提示
          this.$message({ type: "success", message: "成功添加用户数据！" });
          // 关闭添加用户对话框
          this.dialogAddVisible = false;
          // 清空添加用户对话框中的数据
          this.clearAddForm = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.table {
  padding: 2rem;
}
/* 添加按钮 */
.el-button {
  position: fixed;
  top: 200px;
  right: 150px;
}
</style>