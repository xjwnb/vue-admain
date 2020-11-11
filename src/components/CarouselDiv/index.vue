<!--
 * @Author: your name
 * @Date: 2020-11-11 16:28:55
 * @LastEditTime: 2020-11-11 17:40:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\components\CarouselDiv\index.vue
-->
<template>
  <div class="carousel-div">
    <el-carousel :height="height" :type="type">
      <el-carousel-item v-for="carousel in carouselData" :key="carousel.id">
        <el-image :src="carousel.src"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselDiv",
  props: {
    // 数据
    carouselData: {
      type: Array
    },
    // 类型
    type: {
      type: String
    },
    height: {
      type: String
    }
  },
  data() {
    return {
      carousel: this.carouselData
    };
  },
  filters: {
  },
  created() {
  },
  mounted() {
    console.log(this.carouselData);
  },
};
</script>
<style scoped>
.carousel-div {
  margin-bottom: 5rem;
}
.carousel-div:last-child {
  margin-bottom: 0;
}
</style>