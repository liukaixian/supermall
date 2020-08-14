<template>
  <div id="app">
    <router-view></router-view>
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
