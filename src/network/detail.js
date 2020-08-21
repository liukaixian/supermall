import {request}from '@/network/request.js'

export function getDetailData(iid){
    return request({
      url:'/detail',
      params:{
          iid
      }
    })
}
export function getRecommend() {
  return request({
    url: "/recommend"
  }).catch(err => err);
}
//商品信息
export class GoodsInfo{
   constructor(itemInfo,columns,services){
     this.columns=columns
     this.desc=itemInfo.desc
     this.discount=itemInfo.discountDesc
     this.newPrice=itemInfo.price
     this.oldPrice=itemInfo.oldPrice
     this.realPrice=itemInfo.lowNowPrice
     this.services=services
     this.title=itemInfo.title

   }
}
// 店铺数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
  }
}
// 尺寸数据
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
