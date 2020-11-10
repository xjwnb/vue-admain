<!--
 * @Author: your name
 * @Date: 2020-11-10 12:41:43
 * @LastEditTime: 2020-11-10 16:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\components\CollapseDiv\index.vue
-->
<template>
  <el-collapse-item
    :title="`标题${collapseData.id}：` + collapseData.title"
    :name="collapseData.id"
  >
    <div>
      {{" 内容：" + collapseData.body }}
    </div>
  </el-collapse-item>
</template>

<script>
export default {
  name: "collapse-div",
  props: {
    collapse_data: {
      type: Object,
    },
  },
  data() {
    return {
      collapseData: this.collapse_data,
      activeName: 1,
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>