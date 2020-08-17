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
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        scroll:{}
      }
    },
    mounted() {
     this.scroll = new  Scroll(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad: this.pullUpLoad
     })
     this.scroll.on("scroll",position=>{
       this.$emit("scrollEvent",position)
     })
     this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp")
     })

    }

  }
</script>

<style scope>

</style>
