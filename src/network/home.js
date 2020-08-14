import {request}from '@/network/request.js'

export function getHomeMultiData (){
    return request({
      url:'/home/multidata'
    })
}
export function getHomeGodds(type,page){
    return request({
      url:'home/data',
      params:{
        type,
        page
      }
    })
}
