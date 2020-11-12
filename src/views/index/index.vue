<!--
 * @Author: your name
 * @Date: 2020-11-05 23:58:20
 * @LastEditTime: 2020-11-12 13:50:35
 * @LastEditors: Please set LastEditors
 * @Description: 主页
 * @FilePath: \vue-admain\src\views\index\index.vue
-->
<template>
  <div>
    <!-- 设备信息 -->
    <DeviceInfo />
  </div>
</template>

<script>
import { 
  // 设备信息组件
  DeviceInfo
} from '@/components'

export default {
  name: 'Index',
  components: {
    DeviceInfo
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style scoped>

</style>