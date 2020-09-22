<template>
  <div>导航栏 | 
    <router-link to="/">panhao</router-link>
    <router-link to="/xxx">panhao2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
