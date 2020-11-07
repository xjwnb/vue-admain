<!--
 * @Author: your name
 * @Date: 2020-11-07 14:59:56
 * @LastEditTime: 2020-11-07 19:54:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\components\UserDeleteDialog\index.vue
-->
<template>
  <div class="user-delete-dialog">
    <el-dialog
      title="请确认删除"
      :visible.sync="isDialogVisible"
      width="30%"
      center
      :before-close="handleClose"
    >
      <p>确定删除这条数据吗？</p>
      <p>ID：{{ delData.id }}</p>
      <p>name：{{ delData.name }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDelete">取 消</el-button>
        <el-button type="primary" @click="determineDelete">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "UserDeleteDialog",
  props: {
    // 是否显示对话框-父组件传入 @/views/vab/Table
    dialogDeleteVisible: {
      type: Boolean,
      default: false,
    },
    // 编辑的数据-父组件传入 @/views/vab/Table
    deletaData: {
      type: Object,
    },
  },
  data() {
    return {
      // 是否显示对话框
      isDialogVisible: this.dialogDeleteVisible,
      // 要删除的数据
      delData: this.deletaData,
    };
  },
  computed: {
  },
  watch: {
    /**
     * 监听父组件对是否显示对话框的修改操作,更新 data 中的 isDialogVisible
     */
    dialogDeleteVisible(newValue) {
      this.isDialogVisible = newValue;
    },
    /**
     * 监听父组件对传递的编辑数据,更新 data 中的 deleteData
     */
    deletaData(newValue) {
      this.delData = newValue;
    },
  },
  created() {
  },
  mounted() {
  },
  methods: {
    /**
     * 点击 X 按钮
     */
    handleClose() {
      this.$emit("deleteHandleClose");
    },
    /**
     * 取消按钮，发送触发事件
     */
    cancelDelete() {
      this.$emit("cancelDeleteHandler");
    },
    /**
     * 确定按钮，发送触发确定删除事件
     */
    determineDelete() {
      this.$emit("determineDeleteHandler");
    },
  },
};
</script>
<style scoped>
</style>