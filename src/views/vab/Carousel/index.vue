<!--
 * @Author: your name
 * @Date: 2020-11-11 16:04:46
 * @LastEditTime: 2020-11-11 17:38:19
 * @LastEditors: Please set LastEditors
 * @Description: Carousel 页面
 * @FilePath: \vue-admain\src\views\vab\Carousel\index.vue
-->
<template>
  <div class="carousel">
    <CarouselDiv :carouselData="carouselData" :height="height" />
    <CarouselDiv :carouselData="carouselData" :type="type" />
  </div>
</template>

<script>
// 引入 carousel 数据
import { carouselList } from "@/mock/carousel";
// 引入跑马灯组件
import { CarouselDiv } from "@/components";

export default {
  name: "Carousel",
  components: {
    CarouselDiv
  },
  data() {
    return {
      // 跑马灯数据
      carouselData: carouselList,
      // 跑马灯类型
      type: "card",
      height: "500px"
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style scoped>
</style>