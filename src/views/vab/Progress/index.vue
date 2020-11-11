<!--
 * @Author: your name
 * @Date: 2020-11-09 10:41:51
 * @LastEditTime: 2020-11-11 14:08:25
 * @LastEditors: Please set LastEditors
 * @Description: Progress 页面
 * @FilePath: \vue-admain\src\views\vab\Progress\index.vue
-->
<template>
  <div>
    <div
      class="progress_group"
      v-for="(progresses, progressName) in progressList"
    >
      <ProgressDiv
        v-for="progress in progresses"
        :key="progress.id"
        :startNumber="progress.startNumber"
        :lastNumber="progress.lastNumber"
        :status="progress.status"
        :text_inside="progress.text_inside"
        :stroke_width="progress.stroke_width"
      />
    </div>
  </div>
</template>

<script>
// 引入进度条组件
import { ProgressDiv } from "@/components";
// 引入进度条数据对象
import { progressList } from "@/mock/progress";

export default {
  name: "Progress",
  components: {
    ProgressDiv,
  },
  data() {
    return {
      progressList: progressList,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.progress_group {
  margin-bottom: 2rem;
}
</style>
