<!--
 * @Author: your name
 * @Date: 2020-11-10 23:31:28
 * @LastEditTime: 2020-11-10 23:42:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\components\TimelineCustom\index.vue
-->
<template>
  <el-timeline-item :timestamp="activity.timestamp" placement="top" type="primary" >
    <el-card>
      <h4>{{ activity.content }}</h4>
      <p>{{ activity.username }} 提交于 {{ activity.timestamp }}</p>
    </el-card>
  </el-timeline-item>
</template>

<script>
export default {
  name: "TimelineCustom",
  props: {
    timelines: {
      type: Object
    }
  },
  data() {
    return {
      activity: this.timelines
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>