<template>
  <div class="my-swiper" >
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(item,index) in data" :key="index" class="my-swiper-slide ">
        <img :src="item" />
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default{
      data(){
        return {
            swiperOption:{
              loop: true,
              speed: 800,
              autoplay: true,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },

              pagination: {

              el: ".swiper-pagination",

              clickable: true,

              type: "bullets",
              }


            }
        }
      },
      components:{
        Swiper,
        SwiperSlide
      },
      props:{
        data:{}
      }
    }
</script>

<style scoped="scoped">
.my-swiper-slide{
  height: 400px;
  overflow: hidden;
}

</style>
