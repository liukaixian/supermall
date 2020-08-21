<template>
  <div class="goods-list">
    <GoodsListItem v-for="item in goodsList" :goodsItem="item" :key="item.index"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from '@/components/content/GoodsListItem.vue'
  export default{
    props:{
      goodsList:{
        type:Array,
        default:[]
      }
    },
    components:{
      GoodsListItem
    }
  }
</script>

<style>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
