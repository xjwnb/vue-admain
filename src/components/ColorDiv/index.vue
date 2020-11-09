<!--
 * @Author: your name
 * @Date: 2020-11-08 17:37:11
 * @LastEditTime: 2020-11-09 10:56:00
 * @LastEditors: Please set LastEditors
 * @Description: ColorDiv 组件
 * @FilePath: \vue-admain\src\components\ColorDiv\index.vue
-->
<template>
  <div
    class="colorDiv"
    :style="{ backgroundColor: color, color: color }"
    data-clipboard-action="copy"
    :data-clipboard-text="color"
  >
    {{ color }}
    <el-button>COPY</el-button>
  </div>
</template>

<script>
export default {
  name: "ColorDiv",
  props: {
    color: {
      type: String,
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.colorDiv {
  flex: 20%;
  width: 100%;
  height: 100px;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-button {
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.colorDiv:hover {
  cursor: pointer;
}
.colorDiv:hover .el-button {
  transition: opacity 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: .8;
}
</style>