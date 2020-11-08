<!--
 * @Author: your name
 * @Date: 2020-11-08 10:14:18
 * @LastEditTime: 2020-11-08 13:06:37
 * @LastEditors: Please set LastEditors
 * @Description: 用户添加对话框
 * @FilePath: \vue-admain\src\components\UserAddDialog\index.vue
-->
<template>
  <div>
    <el-dialog
      title="添加用户信息"
      :visible.sync="isVisible"
      :before-close="handleClose"
    >
      <!-- 表单开始 -->
      <el-form
        :model="addForm"
        :rules="rules"
        ref="addForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <!-- 用户名输入框 -->
        <el-form-item label="用户名" prop="name">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <!-- 年龄输入框 -->
        <el-form-item label="年龄" prop="age">
          <el-input
            min="1"
            max="150"
            type="number"
            v-model="addForm.age"
          ></el-input>
        </el-form-item>
        <!-- 出生日期输入框 -->
        <el-form-item label="出生日期" prop="date">
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <!-- 表单结束 -->
      <!-- 底部取消和确定按钮 -->
      <span slot="footer" class="dialog-footer">
        <!-- 取消按钮 -->
        <el-button @click="cancelAdd">取 消</el-button>
        <!-- 确定按钮 -->
        <el-button type="primary" @click="determineAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "UserAddDialog",
  props: {
    dialogAddVisible: {
      type: Boolean,
      default: false,
    },
    clearAddForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: this.dialogAddVisible,
      addForm: {
        name: "",
        age: "",
        date: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "用户名不能为空！",
            trigger: "blur",
          },
          {
            min: 3,
            max: 10,
            message: "长度需在 3 到 10 个字符！",
            trigger: ["change, blur"],
          },
        ],
        age: [
          {
            required: true,
            message: "年龄不能为空！",
            trigger: "blur",
          },
        ],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期！",
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  watch: {
    /**
     * 监控父组件 dialogAddVisible 的变化修改 data 中的 isVisible
     */
    dialogAddVisible(newVal) {
      this.isVisible = newVal;
    },

    /**
     * 监听父组件 clearAddForm 的变化,如果为 true 则重置表单数据
     */
    clearAddForm(newVal) {
      if (newVal) {
        this.addForm = {
          name: "",
          age: "",
          date: "",
        };
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 点击 X 按钮事件
     */
    handleClose() {
      this.$emit("handleAddClose");
    },
    /**
     * 触发取消添加按钮
     */
    cancelAdd() {
      this.$emit("cancelAddHandler");
    },
    /**
     * 触发确定添加按钮
     */
    determineAdd() {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.$emit("determineAddHandler", this.addForm);
        } else {
          console.log("不符合条件,无法添加数据");
          return false;
        }
      });
    },
  },
};
</script>
<style scoped>
</style>