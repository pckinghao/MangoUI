<demo>
常规使用
</demo>
<template>
<Tabs v-model:selected="x">
  <Tab title="导航1">当前是第一个tab页</Tab>
  <Tab title="导航2">当前是第二个tab页</Tab>
  <Tab title="导航3">当前是第三个tab页</Tab>
  <Tab title="导航4">当前是第四个tab页</Tab>
</Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('导航2')
    return {
      x
    }
  }
}
</script>