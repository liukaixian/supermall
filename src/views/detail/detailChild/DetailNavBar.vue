<template>
   <NavBar class="detailNavBar">
     <template v-slot:left >

          <img @click="leftBackClick" src="@/assets/img/common/leftBack.svg" />

     </template>
     <template v-slot:center >
      <div v-for="(item,index) in detailBar"
        :key="index" class="detail-item"
        :class="{active:currentIndex==index}"
        @click="itemClick(index)">{{item}}</div>
     </template>
   </NavBar>
</template>

<script>
  import NavBar from "@/components/common/navbar/NabBar.vue"
  export default{
    data(){
      return{
        detailBar:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit("detailNavBarClick",index)
      },
      leftBackClick(){
        this.$router.back()
      }
    }
  }
</script>

<style scope>
  .center{
    display: flex;
  }
  .detail-item{
    flex: 1;
  }
  .center .active{
    color: var(--color-high-text);
  }
</style>
