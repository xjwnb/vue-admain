<!--
 * @Author: your name
 * @Date: 2020-11-04 10:50:49
 * @LastEditTime: 2020-11-05 00:15:22
 * @LastEditors: Please set LastEditors
 * @Description: Login 登录页面
 * @FilePath: \vue-admain\src\views\Login.vue
-->
<template>
  <div id="login-container">
    <div id="login-form">
      <!-- 登录表单 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="65px">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form, $event)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: this.$store.getters.getUserName,
        password: this.$store.getters.getPassword,
      },
      rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur",
          },
          {
            max: 10,
            message: "用户名的长度不能大于 10 位",
            trigger: ["change", "blur"],
          },
          {
            validator: this.validatorName,
            trigger: ["change", "blur"],
          },
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur",
          },
          {
            min: 6,
            message: "密码不少于 6 位",
            trigger: ["change", "blur"],
          },
          {
            max: 20,
            message: "密码不能大于 20 位",
            trigger: ["change", "blur"],
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters([
      "compareNameAndPassword"
    ])
  },
  created() {
    document.title = "登录";
  },
  mounted() {
  },
  methods: {
    /**
     * 表单提交事件
     * @param {object} form 表单对象
     * @param {object} event 事件对象
     */
    onSubmit(form, event) {
      // 阻止默认行为
      event.preventDefault();
      // 获取比较后的数字
      let compare = this.compareNameAndPassword(form);
      // 如果相等
      if (compare === 0) {
        // 将用户名和密码存储在本地存储中
        this.$localStorage.setItem("username", this.form.username);
        this.$localStorage.setItem("password", this.form.password);
        // 跳转到首页
        this.$router.push({ name: 'index' });
      }
    },
    /**
     * 自定义用户名规则
     * @param {object} rule 规则
     * @param {string} val 值
     * @param {Function} callback 回调函数
     */
    validatorName(rule, val, callback) {
      if (val === '小卡车') {
        callback('欢迎开发者');
      }
    },
  },
};
</script>
<style scoped>
#login-container {
  height: 100vh;
  background-image: url("../assets/images/login.png");
  background-position: center;
  background-size: cover;
}
#login-form {
  width: 30rem;
  height: 10rem;
  background-color: #2f3542;
  opacity: 0.8;
  padding: 3rem;
  border-radius: 1rem;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%);
}
</style>