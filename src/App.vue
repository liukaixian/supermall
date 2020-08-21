<template>
  <div id="app">
   <keep-alive exclude="detail">
      <router-view></router-view>
   </keep-alive>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
import mainTabbar from "./components/content/mainTabBar.vue"
export default{
  components:{
    mainTabbar
  }
}
</script>
<style>
  @import url("./assets/css/base.css");
</style>
