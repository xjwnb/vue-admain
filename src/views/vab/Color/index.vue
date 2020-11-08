<!--
 * @Author: your name
 * @Date: 2020-11-08 14:29:14
 * @LastEditTime: 2020-11-08 16:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\vab\Color\index.vue
-->
<template>
  <div>
    Color
    <div
      class="colorDiv"
      data-clipboard-action="copy"
      :data-clipboard-text="colorText"
    >
      {{ colorText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorText: "#0000ff",
    };
  },
  created() {},
  mounted() {
    let that = this;
    let clipboard = new this.$clipboard(".colorDiv");
    clipboard.on("success", function (e) {
      if (e.text !== "") {
        that.$notify({
          title: "success",
          message: "颜色复制成功",
          type: "success",
        });
      } else {
        that.$notify({
          title: 'warning',
          message: '颜色复制失败',
          type: 'warning'
        });
      }
    });
  },
};
</script>
<style scoped>
.colorDiv {
  width: 100px;
  height: 100px;
  background-color: #0000ff;
}
</style>