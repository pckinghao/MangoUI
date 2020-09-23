<template>
    <div>
       <Topnav />
       <div class="banner">
           <h1>UI</h1>
           <h2>vue3造轮子</h2>
           <p class="actions">
               <a>GitHub</a>
               <a>开始</a>
           </p>
       </div>
    </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default{
    components:{Topnav}
}
</script>