<!--
 * @Author: your name
 * @Date: 2020-11-09 10:59:26
 * @LastEditTime: 2020-11-09 13:31:54
 * @LastEditors: Please set LastEditors
 * @Description: 进度条组件
 * @FilePath: \vue-admain\src\components\ProgressDiv\index.vue
-->
<template>
  <div class="progress-div">
    <el-progress
      :percentage="numInterval"
      :stroke-width="stroke_width"
      :text-inside="text_inside"
      :status="status"
    >
    </el-progress>
  </div>
</template>

<script>
export default {
  name: "ProgressDiv",
  props: {
    startNumber: {
      type: Number,
    },
    lastNumber: {
      type: Number,
    },
    // color,
    stroke_width: {
      type: Number,
    },
    text_inside: {
      type: Boolean,
    },
    status,
  },
  data() {
    return {
      numberStart: this.startNumber,
      numberLast: this.lastNumber,
    };
  },
  computed: {
    numInterval() {
      let time = window.setInterval(() => {
        clearInterval(time);
        this.numberStart += 1;
        if (this.numberStart > this.numberLast) {
          clearInterval(time);
          this.numberStart = this.numberLast;
        }
      }, 50);
      return this.numberStart;
    },
  },
  created() {},
  mounted() {
  },
};
</script>
<style scoped>
.progress-div {
  margin-bottom: 1rem;
}
</style>