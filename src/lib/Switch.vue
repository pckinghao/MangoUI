<template>
  <button class="panhao-switch" @click="toggle" :class="{'panhao-checked':value}">
    <p v-if="value" class="title-true">开启</p>
    <p v-else class="title-false">关闭</p>
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  }
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.panhao-switch {
  height: $h;
  width: $h * 2.5;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute; 
    top: 2px; left: 2px; 
    height: $h2; width: $h2; 
    background: white; 
    border-radius: $h2 / 2; 
    transition: all 250ms;
  }
  >.title-false {
    position: absolute; 
    top: 2px; 
    right: 6px; 
  }
  >.title-true {
    position: absolute; 
    top: 2px; 
    left: 6px;  
    }
  &.panhao-checked { 
    background: #1890ff;
    > span { left: calc(100% - #{$h2} - 2px);}
  }
  &:focus { outline: none; }
  &:active {
    > span { width: $h2 + 4px; }
  }
  &.panhao-checked:active {
    > span { width: $h2 + 4px; margin-left: -4px; }
  }
  
}
</style>
