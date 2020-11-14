<!--
 * @Author: your name
 * @Date: 2020-11-03 18:13:40
 * @LastEditTime: 2020-11-14 17:26:57
 * @LastEditors: Please set LastEditors
 * @Description: 关于页面
 * @FilePath: \vue-admain\src\views\About.vue
-->
<template>
  <div class="about">
    <h1>{{ msg.projectName }}</h1>
    <h4>开发者：{{ msg.developer }}</h4>
    <h3>项目所涉及技术</h3>
    <div class="technology" @click="clickHamdler">
      <div
        v-for="item in msg.technology"
        :key="item.id"
        class="tech"
        :id="item.src"
      >
        {{ item.name }}
      </div>
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
h4,
h3 {
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
