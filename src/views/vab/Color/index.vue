<!--
 * @Author: your name
 * @Date: 2020-11-08 14:29:14
 * @LastEditTime: 2020-11-11 18:09:04
 * @LastEditors: Please set LastEditors
 * @Description: Color 页面
 * @FilePath: \vue-admain\src\views\vab\Color\index.vue
-->
<template>
  <div class="color" @click="clickHandler">
    <div class="color-group" v-for="(colors, colorName, index) in colorList">
      <ColorDiv v-for="color in colors" :key="color.id" :color="color.color" />
    </div>
  </div>
</template>

<script>
import {
  // 引入 ColorDiv
  ColorDiv,
} from "@/components/";
// 引入 ColorList 数据
import { colorList } from "@/mock/color";

export default {
  name: "Color",
  components: {
    ColorDiv,
  },
  data() {
    return {
      colorText: "#0000ff",
      // color 对象数组
      colorList: colorList,
      clipboardText: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 事件代理点击事件,获取复制文本之后并且返回提示通知
     */
    async clickHandler(e) {
      let target = e.target;
      if (e.target.className !== "colorDiv") {
        target = e.target.parentElement.parentElement;
      } else {
        target = e.target;
      }
      console.dir(target);
      let clipboard = await this.getCopyText(".color", target);
      if (clipboard !== null) {
        this.clipboardText = clipboard;
        this.$notify({
          type: "success",
          message: `复制颜色 (${this.clipboardText}) 成功!`,
          title: "success",
        });
      } else {
        this.$notify({
          type: "warning",
          message: `复制颜色失败!`,
          title: "warning",
        });
      }
    },

    /**
     * 根据传入的 class 或者 id 和目标 dom 节点,
     * 使用 promise 返回被复制的文本
     * @param {string} id dom 的 class 属性或者 id 属性
     * @param {object} target 目标 dom
     * @returns 成功则返回复制的字符,错误则报错
     */
    getCopyText(id, target) {
      let targetText = target.innerText;
      targetText = targetText.substr(0, 7);
      return new Promise((resolve, reject) => {
        new this.$clipboard(id, {
          text: function () {
            if (targetText) {
              resolve(targetText);
            } else {
              reject(new Error("复制失败"));
            }
            return targetText;
          },
        });
      });
    },
  },
};
</script>
<style scoped>
.color-group {
  display: flex;
  flex-wrap: wrap;
  min-width: 500px;
  margin-bottom: 20px;
}
.color-group:last-child {
  margin-bottom: 0;
}
</style>