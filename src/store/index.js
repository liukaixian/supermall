import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
    const newProduct = state.cartList.find((item)=>{
      return   item.iid==payload.iid
    })

    if(newProduct){
      newProduct.count++
    }else{
      payload.count = 1
      state.cartList.push(payload)
    }
    }
  },
  actions: {
  },
  modules: {
  }
})
