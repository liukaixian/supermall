<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in data.list" :key="item.index">
        <a :href="item.link"> <img :src="item.image" /></a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
    import {Swiper, SwiperItem} from '@/components/common/swiper'
    export default{
      components:{
        Swiper,
        SwiperItem
      },
      props:{
        data:{}
      }
    }
</script>

<style>
  
</style>
