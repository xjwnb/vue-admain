<!--
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-10 16:20:55
 * @LastEditors: Please set LastEditors
 * @Description: 关于页面
 * @FilePath: \vue-admain\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>{{ msg.projectName }}</h1>
    <h4>开发者：{{ msg.developer }}</h4>
    <div class="technology" @click="clickHamdler">
      <template v-for="item in msg.technology" v-key="item.id">
        <div class="tech" :id="item.src">
          {{ item.name }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { aboutMsg } from "@/mock/about";

export default {
  name: "About",
  data() {
    return {
      msg: aboutMsg,
    };
  },
  created() {},
  methods: {
    clickHamdler(e) {
      let url = e.target.id;
      // window.location.href = src;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.about {
  text-align: center;
}
h1 {
  text-shadow: 1px 2px 2px aquamarine;
  font-size: 2rem;
}
h4 {
  margin-top: 1rem;
}
.about {
  width: 100%;
  min-width: 500px;
}
.technology {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ＃1abc9c;
}
.tech {
  cursor: pointer;
  width: 200px;
  height: 100px;
  line-height: 100px;
  background-color: aquamarine;
  margin-bottom: 10px;
}
</style>
