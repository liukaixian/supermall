<template>
  <div class="goods-list-item" @click="goodsListItemClick">

    <img :src="showImage(goodsItem)"  @load="imgLoad" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      goodsItem:{
        type:Object,
        default (){
          return{}
        }
      }
    },
    methods:{
      goodsListItemClick(){
        this.$router.push({
          path:'/detail',
          query:{
            iid:this.goodsItem.iid
          }
        })
      },
      // 动态显示图片
      showImage(item) {
        return item.img || item.image || item.show.img;
      },
      imgLoad(){
       this.$bus.$emit("imgLoad")

      }
    }
  }
</script>

<style>
  .goods-list-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 20px;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(../../assets/img/tabbar/cart.svg) 0 0/14px 14px;
  }
</style>
