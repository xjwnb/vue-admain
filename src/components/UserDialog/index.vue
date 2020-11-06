<!--
 * @Author: your name
 * @Date: 2020-11-06 17:24:51
 * @LastEditTime: 2020-11-06 21:22:03
 * @LastEditors: Please set LastEditors
 * @Description: UserDialog 用户对话框
 * @FilePath: \vue-admain\src\components\UserDialog\index.vue
-->
<template>
  <div>
    <el-dialog
      title="编辑信息"
      :visible.sync="isVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- 对话框主题 -->
      <!-- 表单 -->
      <el-form :model="editForm">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="editForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="editForm.age"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
          <!-- <el-input v-model="editForm.age"></el-input> -->
          <el-date-picker v-model="editForm.date" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <!-- 底部 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="determine">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "user-dialog",
  props: {
    // 从 @/views/vab/Table 传入的对话框是否可见
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    // 从 @/views/vab/Table 传入的被编辑的数据对象
    editData: {
      type: Object,
    },
  },
  data() {
    return {
      // 编辑的对象
      editForm: this.editData,
      // 表单 label 宽度
      formLabelWidth: "80px",
      // 显示对话框
      isVisible: this.dialogVisible
    };
  },
  watch: {
    /**
     * 监听父组件传递的 editData 编辑数据对象
     */
    editData(newVal) {
      this.editForm = newVal;

    },
    /**
     * 监听父组件传递的 dislogVisible 对话框是否显示
     */
    dialogVisible(newVal) {
      this.isVisible = newVal;

    }
  },
  created() {},
  mounted() {
  },
  methods: {
    /**
     * 对话框中 X 按钮点击关闭事件
     */
    handleClose(done) {
      this.isVisible = false;
      this.$emit("closeHandler");

    },
    /**
     * 对话框取消按钮
     */
    cancel() {
      this.$emit("cancelHandler");
      this.isVisible = false;

    },
    /**
     * 对话框确定按钮操作
     */
    determine() {
      this.$emit("determineHnadler");
      this.isVisible = false;

    },
  },
};
</script>
<style scoped>
</style>