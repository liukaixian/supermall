<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
        <slot></slot>
     </div>
   </div>
</template>

<script>
  import Scroll from "better-scroll"
  export default{
    components:{
      Scroll
    },
    data(){
      return {
        scroll:{}
      }
    },
    mounted() {
     this.scroll = new  Scroll(this.$refs.wrapper,{

     })
    }
  }
</script>

<style scope>

</style>
