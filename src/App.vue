<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup(){
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 600 ? false : true)
    provide("menuVisible",menuVisible);//set
    router.afterEach(() => {
      if(width <= 600){
        menuVisible.value = false;
      }
    })
  }
}
</script>
