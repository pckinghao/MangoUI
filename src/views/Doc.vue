<template>
    <div class="layout">
      <Topnav toggleMenuButtonVisible class="nav" />
      <div class="content">
        <aside v-if="menuVisible">
          <h2>文档</h2>
            <ol>
              <li>
                <router-link to="/doc/intro">介绍</router-link>
              </li>
              <li>
                <router-link to="/doc/install">安装</router-link>
              </li>
              <li>
                <router-link to="/doc/get-started">开始使用</router-link>
              </li>
            </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 组件</router-link>
            </li>
          </ol>
        </aside>
        <main>
          <router-view />
        </main>
      </div>
</div>
</template>

<script lang="ts">
import { inject, Ref } from "vue"
import Topnav from '../components/Topnav.vue'
export default{
    components:{ Topnav },
    setup(){
        const menuVisible = inject<Ref<boolean>>('menuVisible');//get
        return {menuVisible};
    }
}
</script>
<style lang="scss" scoped>
$aside-index : 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    >h2 {
      margin-top: 20px;
    }
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    margin: 30px 15px 0 15px;
    background:rgb(213, 213, 212);
    border-radius: 8px;
  }
}
aside {
  //  background: rgb(255, 255, 255);
   background:rgb(213, 213, 212);
   width: 150px; 
   padding: 0;
   position: fixed;
   top: 90px;
   left: 0;
  //  padding-top: 70px;
   height: 100%;
   z-index: $aside-index;
   border-radius: 8px;
   >h2 {
       margin-bottom: 4px;
       padding: 0 16px;
   }
   >ol{
       >li {
           padding: 4px 0;
           >a {
              display: block;
              padding: 4px 16px;
              text-decoration: none;
            }
            .router-link-active {
              background: #e6f7ff;
              border-right: 4px solid rgb(255,210,23);
              // color: rgb(24, 144, 255);
              color: rgb(255,210,23);
              font-weight:bold;
            }
       }
   }
}
main {
    overflow: auto;
} 
</style>