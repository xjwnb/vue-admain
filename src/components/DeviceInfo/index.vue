<!--
 * @Author: your name
 * @Date: 2020-11-12 11:02:08
 * @LastEditTime: 2020-11-12 13:52:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admain\src\components\DeviceInfo\index.vue
-->
<template>
  <div class="device-info">
    <p>语言：{{ info.languages }}</p>
    <p>IP 地址：{{ info.ip }}</p>
  </div>
</template>

<script>
// 引入获取 IP 地址工具方法
import { getIP } from '@/utils/IP'

export default {
  name: "DeviceInfo",
  data() {
    return {
      info: {
        ip: "",             // IP 地址
        languages: "",      // 语言
      }
    }
  },
  created() {
    // 调用获取当前语言
    this.getLanguages();
    // 调用获取 IP
    this.getIP();
  },
  mounted() {

  },
  methods: {
    // 设备当前语言
    getLanguages() {
      let languages = navigator.languages || navigator.language || navigator.userLanguage;
      this.info.languages = languages[0];
    },
    // 获取 IP 
    async getIP() {
      let res = await this.$axios.get("/getIP/cityjson")
      if (res.status === 200) {
        let ip = getIP(res.data);
        this.info.ip = ip;
      }
    }
  }
}
</script>

<style scoped>
.device-info {
  border: 1rem solid aliceblue;
  border-radius: 1rem;
  width: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1rem;
}
.device-info:hover {
  border-color: aquamarine;
}
p {
  margin: 0;
}
</style>
