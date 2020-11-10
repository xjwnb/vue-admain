<!--
 * @Author: your name
 * @Date: 2020-11-10 20:46:24
 * @LastEditTime: 2020-11-10 23:43:44
 * @LastEditors: Please set LastEditors
 * @Description: 时间线组件
 * @FilePath: \vue-admain\src\components\TimelineDiv\index.vue
-->
<template>
  <el-timeline-item :timestamp="activity.timestamp" type="primary">
    {{ activity.username }} - {{ activity.content }}
  </el-timeline-item>
</template>

<script>
export default {
  props: {
    timelines: {
      type: Object,
    },
  },
  data() {
    return {
      activity: this.timelines,
    };
  },
  watch: {
  },
  created() {},
  mounted() {
  }
};
</script>
<style scoped>
</style>