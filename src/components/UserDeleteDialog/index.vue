<!--
 * @Author: your name
 * @Date: 2020-11-07 14:59:56
 * @LastEditTime: 2020-11-07 16:52:44
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
    /* deleteMsg() {
      let msg = `确定是否删除 
            ID：${this.delData.id},
            name：${this.delData.name}。
            这条数据？`;
      return msg;
    }, */
  },
  watch: {
    /**
     * 监听父组件对是否显示对话框的修改操作,更新 data 中的 isDialogVisible
     */
    dialogDeleteVisible(newValue) {
      console.log(newValue);
      this.isDialogVisible = newValue;
    },
    /**
     * 监听父组件对传递的编辑数据,更新 data 中的 deleteData
     */
    deletaData(newValue) {
      this.delData = newValue;
    },
  },
  created() {},
  mounted() {
    console.log(this.delData);
  },
  methods: {
    /**
     *
     */
    handleClose() {
      this.$emit("deleteHandleClose");
    },
    cancelDelete() {
      console.log("cancel111");
      this.$emit("cancelDeleteHandler");
    },
    determineDelete() {
      console.log("delete11111");
      this.$emit("determineDeleteHandler");
    },
  },
};
</script>
<style scoped>
</style>