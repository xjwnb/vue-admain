<!--
 * @Author: your name
 * @Date: 2020-11-09 23:46:27
 * @LastEditTime: 2020-11-17 11:22:25
 * @LastEditors: Please set LastEditors
 * @Description: 时间线页面
 * @FilePath: \vue-admain\src\views\vab\Timeline\index.vue
-->
<template>
  <div id="timelines">
    <h1>项目开发时间线进度</h1>
    <!-- 提交表单 -->
    <div class="commitInput">
      <el-form
        :model="commitForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="提交内容:" prop="commit">
          <el-input
            placeholder="请输入提交内容"
            v-model="commitForm.commitContent"
          >
          </el-input>
        </el-form-item>
        <!-- <el-form-item> -->
        <el-button type="primary" @click="commitHandler">提交</el-button>
        <!-- </el-form-item> -->
      </el-form>
    </div>
    <div class="timeline">
      <!-- 默认时间线 -->
      <div class="time">
        <el-timeline>
          <TimelineDiv
            v-for="timeline in timelineData"
            :key="timeline.id"
            :timelines="timeline"
          />
        </el-timeline>
      </div>
      <!-- 自定义时间线 -->
      <div class="time">
        <el-timeline>
          <TimelineCustom
            v-for="timeline in timelineData"
            :key="timeline.id"
            :timelines="timeline"
          />
        </el-timeline>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineDiv, TimelineCustom } from "@/components";
// 引入 时间格式化 方法
import { formatDateToYMD, getHourMinuteSecond } from "@/utils/Date";

export default {
  name: "Timeline",
  components: {
    TimelineDiv,
    TimelineCustom,
  },
  data() {
    return {
      // 时间线数据
      timelineData: null,
      // 提交内容表单
      commitForm: {
        commitContent: "",
      },
      // 输入规则
      rules: {
        commit: [
          {
            required: true,
            message: "提交内容不能为空",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {},
  created() {},
  async mounted() {
    let timelineData = await this.getTimeLineData();
    if (Object.prototype.toString.call(timelineData) !== "[object Error]") {
      // 数组反转
      timelineData = timelineData.reverse();
      this.timelineData = timelineData;
    }
  },
  methods: {
    /**
     * 发送请求获取 TimelineData
     */
    getTimeLineData() {
      return new Promise((resolve, reject) => {
        this.$axios.get("/api/commitRecord").then((res) => {
          if (res.status === 200) {
            resolve(res.data);
          } else {
            this.$message({
              type: "warning",
              message: "数据获取失败！",
            });
            reject(new Error("数据获取失败！"));
          }
        });
      });
    },

    /**
     * 提交按钮，发送 post 请求事件
     */
    commitHandler() {
      // 判断输入框是否为空
      if (this.commitForm.commitContent !== "") {
        // 获取事件并且格式化
        let date = new Date();
        let formDate = `${formatDateToYMD(date)} ${getHourMinuteSecond(date)}`;
        // 发送 post 网络请求提交数据
        this.$axios
          .post("/api/commitRecord", {
            username: "小卡车",
            content: this.commitForm.commitContent,
            timestamp: formDate,
          })
          .then((res) => {
            // 获取数据
            if (res.status === 201) {
              this.timelineData.unshift(res.data);
              this.commitForm.commitContent = "";
            }
          });
      } else {
        this.$message({
          type: "warning",
          message: "请输入提交信息！",
        });
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  text-shadow: 1px 2px 2px aquamarine;
  font-size: 2rem;
}
.timeline {
  display: flex;
  justify-content: space-around;
}
.time {
  /* flex: auto; */
  height: 100%;
  border: 3px solid skyblue;
  border-radius: 2rem;
  /* background-color: #bdc3c7; */
  opacity: 0.8;
  padding: 2rem;
}
.time:hover {
  box-shadow: 0.5rem 0.5rem 0.5rem #bdc3c7;
}
/* 输入 */
.commitInput {
  display: flex;
  margin-bottom: 30px;
}
.el-form {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 2rem;
}
</style>