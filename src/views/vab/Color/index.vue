<!--
 * @Author: your name
 * @Date: 2020-11-08 14:29:14
 * @LastEditTime: 2020-11-08 15:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\views\vab\Color\index.vue
-->
<template>
  <div>
    Color
    <div class="colorDiv">#0000ff</div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {
    let color = document.querySelector(".colorDiv");
    let content = color.innerHTML;
  }
}
</script>
<style scoped>
.colorDiv {
  width: 100px;
  height: 100px;
  background-color: #0000ff;
}
</style>