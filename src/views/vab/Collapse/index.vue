<!--
 * @Author: your name
 * @Date: 2020-11-10 12:00:26
 * @LastEditTime: 2020-11-10 15:58:42
 * @LastEditors: Please set LastEditors
 * @Description: Collapse 折叠面板 页面
 * @FilePath: \vue-admain\src\views\vab\Collapse\index.vue
-->
<template>
  <div id="collapse">
    <el-collapse v-model="activeName" accordion>
      <template v-for="collapse in collapseData" v-key="collapse.id">
        <CollapseDiv :collapse_data="collapse" />
      </template>
    </el-collapse>
  </div>
</template>

<script>
// 引入折叠面板组件
import { CollapseDiv } from "@/components";

export default {
  components: {
    CollapseDiv,
  },
  data() {
    return {
      // 折叠面板数据
      collapseData: null,
      // Loading 控制
      isloading: null,
      // 触发的 name
      activeName: 1
    };
  },
  created() {},
  async mounted() {
    // 获取数据
    let collapseData = await this.getJsonplaceholderData();
    // 确认数据状态
    if (Object.prototype.toString.call(collapseData) !== "[object Error]") {
      // 将获取的数据赋值给 data 中的 collapseData
      this.collapseData = collapseData;
    }
    this.$nextTick(() => {
      // 在 nextTick 之后关闭 loading
      this.isloading().close;
    });
  },
  methods: {
    /**
     * 控制 Loading
     */
    loadingShow() {
      let loading = this.$loading({
        // fullscreen: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        target: document.querySelector("body"),
      });
      return () => {
        return {
          close: loading.close(),
        };
      };
    },
    /**
     * 发送请求获取数据，并将结果通过 Prommise 期约状态返回
     */
    getJsonplaceholderData() {
      this.isloading = this.loadingShow();
      return new Promise((resolve, reject) => {
        this.$axios
          .get("http://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            if (res.status === 200) {
              resolve(res.data);
            } else {
              this.$message({
                type: "warning",
                message: "获取数据失败！",
              });
              reject(new Error("数据获取失败！"));
            }
          });
      });
    },
  },
};
</script>

<style scoped>
</style>