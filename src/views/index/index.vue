<!--
 * @Author: your name
 * @Date: 2020-11-05 23:58:20
 * @LastEditTime: 2020-11-12 15:30:57
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 * @FilePath: \vue-admain\src\views\index\index.vue
-->
<template>
  <div>
    <!-- 设备信息 -->
    <DeviceInfo />
    <div class="charts">
      <!-- 折线图 -->
      <div class="line">
        <ve-line :data="chartData" />
      </div>
      <!-- 柱状图 -->
      <div class="histogram">
        <ve-histogram :data="chartData" />
      </div>
      <div class="pie">
        <ve-pie :data="chartData" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  // 设备信息组件
  DeviceInfo,
} from "@/components";
import carts from "@/mock/vcarts/index.json";

export default {
  name: "Index",
  components: {
    DeviceInfo,
  },
  data() {
    return {
      chartData: carts.chartData,
    };
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.charts {
  display: flex;
}
.line, .histogram, .pie {
  width: 50%;
  height: 500px;
}
</style>