<template>
   <div class="detail">
     <DetailNavBar class="detail-navBar" @detailNavBarClick="detailNavBarClick" ref="DetailNavBar"></DetailNavBar>
     <Scroll class="detail_scroll" :probeType="3" @scrollEvent="scroll" ref="detailScroll">
       <DetailSwiper :data="topImages"></DetailSwiper>
       <detailBaseInfo :goods="goodsInfo"></detailBaseInfo>
       <DetailShopInfo :shop="shops"></DetailShopInfo>
       <DetailImagesInfo :imagesInfo="detailsInfo" @imgLoad="imgLoad"></DetailImagesInfo>
       <DetailParamInfo :paramInfo="paramsInfo"  ref="param"></DetailParamInfo>
       <DetailCommentInfo :commentInfo="commentInfo" ref="comment"></DetailCommentInfo>
       <GoodsList :goodsList="goodsList" ref="recommend"> </GoodsList>
    </Scroll>
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
   </div>
</template>

<script>
  import Scroll from "@/components/common/scroll/Scroll.vue"

  import DetailNavBar from '@/views/detail/detailChild/DetailNavBar.vue'
  import DetailSwiper  from '@/views/detail/detailChild/DetailSwiper.vue'
  import detailBaseInfo from '@/views/detail/detailChild/detailBaseInfo.vue'
  import DetailShopInfo from '@/views/detail/detailChild/DetailShopInfo.vue'
  import DetailImagesInfo from '@/views/detail/detailChild/DetailImagesInfo.vue'
  import DetailParamInfo from '@/views/detail/detailChild/DetailParamInfo.vue'
  import DetailCommentInfo from '@/views/detail/detailChild/DetailCommentInfo.vue'
  import GoodsList from '@/components/content/GoodsList.vue'
  import DetailBottomBar from '@/views/detail/detailChild/DetailBottomBar.vue'
  import {getDetailData,getRecommend,GoodsInfo,Shop,GoodsParams} from '@/network/detail.js'
  import {debounce} from '@/common/utils.js'

  export default{
    destroyed() {
      console.log(this.$refs.detailScroll)
    },
    name:'detail',
    data(){
      return{
          iid :null,
          topImages:[],
          goodsInfo:{},
          shops:{},
          detailsInfo:{},
          paramsInfo:{},
          commentInfo:{},
          goodsList:[],
          componentSetoffTop:[0,1000,2000,4000]
      }
    },
    components:{
      Scroll,


      DetailNavBar,
      DetailSwiper,
      detailBaseInfo,
      DetailShopInfo,
      DetailImagesInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    created() {
     this.iid = this.$route.query.iid
     this.getDetailData(this.iid)
     this.getRecommend()
     this.$bus.$on("imgLoad",debounce(this.imgLoad))
    },
    methods:{
      /* 事件监听*/
      detailNavBarClick(index){
        this.$refs.detailScroll.scroll.scrollTo(0,-this.componentSetoffTop[index],100)


      },
      scroll(position){
       if(-position.y <this.componentSetoffTop[1] ){
          this.$refs.DetailNavBar.currentIndex=0
       }else if(-position.y <this.componentSetoffTop[2] ){
         this.$refs.DetailNavBar.currentIndex=1
       }else if(-position.y <this.componentSetoffTop[3] ){
         this.$refs.DetailNavBar.currentIndex=2
       }else{
         this.$refs.DetailNavBar.currentIndex=3
       }
      },
      imgLoad(flag){

        if(this.$refs.detailScroll != undefined){
          this.$refs.detailScroll.scroll.refresh()
          this.componentSetoffTop[1] =  this.$refs.param.$el.offsetTop
          this.componentSetoffTop[2] =  this.$refs.comment.$el.offsetTop
          this.componentSetoffTop[3] =  this.$refs.recommend.$el.offsetTop
        }
      },
      addCart(){
          const product = {}
          product.image = this.topImages[0]
          product.title= this.goodsInfo.title
          product.desc = this.goodsInfo.desc
          product.price = this.goodsInfo.realPrice
          product.iid = this.iid
          this.$store.commit("addCart",product)
      },

      /* 网络请求*/
      getDetailData(query){
        getDetailData(query).then(data=>{
          //获取轮播图的数据
          this.topImages=data.result.itemInfo.topImages
          //获取商品的信息
          this.goodsInfo=new GoodsInfo(data.result.itemInfo,data.result.columns,data.result.shopInfo.services)
         //获取店铺的信息
          this.shops = new Shop(data.result.shopInfo);
          // 获取下面的图片展示数据
          this.detailsInfo = data.result.detailInfo;
          // 获取尺寸数据
          this.paramsInfo = new GoodsParams(data.result.itemParams.info, data.result.itemParams.rule || {});
          // 获取评论数据
          if (data.result.rate.cRate !== 0) {
            this.commentInfo = data.result.rate.list[0] || {};
          }
        })
      },
      /* 请求推荐数据*/
      getRecommend(){
        getRecommend().then(data=>{

          this.goodsList=data.data.list
        })
      }
    }

  }
</script>

<style scope>
  .detail-navBar{
    position: relative;
    z-index: 6;
    background-color: #FFFFFF;
  }
  .detail{
    position: relative;
    height: 100vh;
    z-index: 9;
    background-color: #FFFFFF;
  }
  .detail_scroll{
    position: fixed;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>
