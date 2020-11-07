<!--
 * @Author: your name
 * @Date: 2020-11-05 19:38:35
 * @LastEditTime: 2020-11-07 11:19:52
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
          console.log("putUser", res);
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
  },
};
</script>
<style scoped>
.table {
  padding: 2rem;
}
</style>