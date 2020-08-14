<template>
  <div class="tab-control">
    <div class="tab-control-nav">

        <div class="tab-control-nav-item" v-for="(item,index) in controlNav" @click="itemClick(index)">
         <span :class="{active:currentIndex==index}">{{item}}</span>
        </div>

    </div>
  </div>
</template>

<script>
  export default{
    props:{
      controlNav:{}
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex=index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style>

  .tab-control-nav{
   display: flex;
   font-size: 16px;
   height: 50px;
   line-height: 50px;
   background-color: #FFFFFF
  }
  .tab-control-nav-item{
    flex: 1;
    text-align: center;
  }
   .tab-control-nav-item span{
     padding-bottom: 5px;
   }
  .tab-control-nav-item .active{
    border-bottom: 2px solid var(--color-high-text);
    color: var(--color-tint);
  }

</style>
