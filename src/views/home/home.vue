<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <h2  >购物街</h2>
      </template>
    </NavBar>


    <Scroll id="scroll">
      <HomeSwiper :data="banner"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <Feature></Feature>
      <TabControl :controlNav="controlNav" class="tab-control" @tabClick="tabClick"></TabControl>
      <GoodsList :goodsList="goods[currentType].list"></GoodsList>
    </Scroll>
 </div>
</template>

<script>
  import  HomeSwiper from  '@/views/home/homeChild/HomeSwiper.vue'
  import Scroll from '@/components/common/scroll/Scroll.vue'

  import NavBar from '@/components/common/navbar/NabBar.vue'
  import  Recommend from  '@/views/home/homeChild/Recommend.vue'
  import  Feature from  '@/views/home/homeChild/Feature.vue'
  import  TabControl from '@/components/content/TabControl.vue'
  import  GoodsList from '@/components/content/GoodsList.vue'

  import {getHomeMultiData,getHomeGodds} from '../../network/home.js'
  export default{
    components:{
      HomeSwiper,
      Scroll,

      NavBar,
      TabControl,
      Recommend,
      Feature,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banner:[],
        recommend:[],
        controlNav:['精品','热门','推荐'],
        goods:{
          pop:{page:0,list:[]},
          new:{page:0,list:[]},
          sell:{page:0,list:[]}
        },
        currentType:'pop'
      }
    },
    created() {
      this.getHomeMultiData()

      this.getHomeGoos('pop')
      this.getHomeGoos('new')
      this.getHomeGoos('sell')
    },
    methods:{
      /* 事件监听*/
      tabClick(index){
        this.currentType=Object.keys(this.goods)[index]
       /* this.currentType=Object.keys(this.goods)[index] */
      },

      /* 网络请求*/
      getHomeMultiData(){
        getHomeMultiData().then(data=>{
          this.banner=data.data.banner
          this.recommend=data.data.recommend
        })
      },
      getHomeGoos(type){
       let page = this.goods[type].page+1
        getHomeGodds(type,page).then(data=>{
          this.goods[type].list.push(...data.data.list)
        })

      }
    }
  }
</script>

<style scoped="scoped">
  #home{
    margin-top: 44px;
    height: calc(100vh - 49px);
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #F6F6F6;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }
 #home .tab-control{
   position: sticky;
   top: 44px;
   z-index: 9;
 }
 #scroll{

   position: absolute;
   right: 0;
   left: 0;
   top: 0;
   bottom: 49px;
   overflow: hidden;
 }
</style>
