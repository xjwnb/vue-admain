<!--
 * @Author: your name
 * @Date: 2020-11-09 23:46:27
 * @LastEditTime: 2020-11-10 23:59:00
 * @LastEditors: Please set LastEditors
 * @Description: 时间线页面
 * @FilePath: \vue-admain\src\views\vab\Timeline\index.vue
-->
<template>
  <div class="timeline">
    <div class="time">
      <el-timeline>
        <template v-for="timeline in timelineData" v-key="timeline.id">
          <TimelineDiv :timelines="timeline" />
        </template>
      </el-timeline>
    </div>
    <div class="time">
      <el-timeline>
        <template v-for="timeline in timelineData" v-key="timeline.id">
          <TimelineCustom :timelines="timeline" />
        </template>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import { TimelineDiv, TimelineCustom } from "@/components";

export default {
  name: "Timeline",
  components: {
    TimelineDiv,
    TimelineCustom
  },
  data() {
    return {
      // 时间线数据
      timelineData: null,
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
        this.$axios.get("http://localhost:3000/commitRecord").then((res) => {
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
  },
};
</script>

<style scoped>
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
  opacity: .8;
  padding: 2rem;
}
.time:hover {
  box-shadow: .5rem .5rem .5rem #bdc3c7;
}
</style>