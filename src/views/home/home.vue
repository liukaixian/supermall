<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <h2>购物街</h2>
      </template>
    </NavBar>

    <TabControl :controlNav="controlNav"
    @tabClick="tabClick"
    :class="{fixed:tabControlIsShow}"
     v-show="tabControlIsShow"
    ref="tabControl2" ></TabControl>
    <Scroll id="scroll"
         ref="scroll"
         :probeType="3"
         @scrollEvent="backTopShow"
         :pullUpLoad="true"
         @pullingUp="loadMore">

      <HomeSwiper :data="banner" @imgLoad="swiperImgLoad"></HomeSwiper>
      <Recommend :recommend="recommend"></Recommend>
      <Feature></Feature>
      <TabControl :controlNav="controlNav"
        @tabClick="tabClick"
        ref="tabControl" ></TabControl>
      <GoodsList :goodsList="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backTop" v-show="backTopIsShow"></BackTop>

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
  import BackTop from "@/components/content/BackTop.vue"

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
      GoodsList,
      BackTop
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
        currentType:'pop',
        backTopIsShow:false,
        offsetTop:550,
        tabControlIsShow:false
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

        this.$refs.tabControl2.currentIndex=index
        this.$refs.tabControl.currentIndex=index
      },
      backTop(){
        this.$refs.scroll.scroll.scrollTo(0,0,1000)
      },
      backTopShow(position){
          this.backTopIsShow= -position.y>1000
          this.tabControlIsShow=-position.y>this.offsetTop

      }
      ,
      loadMore(){
        this.getHomeGoos(this.currentType)
      },
      swiperImgLoad(){
         this.offsetTop = this.$refs.tabControl.$el.offsetTop
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
          this.goods[type].page=page
           this.$refs.scroll.scroll.refresh()
          this.$refs.scroll.scroll.finishPullUp()
        })

      }
    }
  }
</script>

<style scoped="scoped">
  #home{
    margin-top: 44px;
    height: calc(100vh - 44px);
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

 #scroll{

   position: absolute;
   right: 0;
   left: 0;
   top: 0;
   bottom: 49px;
   overflow: hidden;
 }
 .fixed{
   position: relative;
    z-index: 6;

 }
</style>
