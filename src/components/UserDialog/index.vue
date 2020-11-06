<!--
 * @Author: your name
 * @Date: 2020-11-06 17:24:51
 * @LastEditTime: 2020-11-06 18:55:57
 * @LastEditors: Please set LastEditors
 * @Description: UserDialog 用户对话框
 * @FilePath: \vue-admain\src\components\UserDialog\index.vue
-->
<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="determine"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "user-dialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // isVisible: this.dialogVisible,
    };
  },
  watch: {
    /* dialogVisible(newVal) {
      console.log(newVal);
      this.isVisible = newVal;
    } */
  },
  created() {},
  mounted() {},
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 取消操作
    cancel() {
      this.$emit("cancelHandler");
      // this.isVisible = false;
    },
    // 确定操作
    determine() {
      this.$emit("determineHnadler");
      // this.isVisible = false;
      // this.$emit()
    }
  },
};
</script>
<style scoped>
</style>