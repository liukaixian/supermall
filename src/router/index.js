import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const home = ()=>import ('@/views/home/home')
const classes = ()=>import ('@/views/category/classes')
const cart = ()=>import ('@/views/cart/cart')
const profile = ()=>import ('@/views/profile/profile')
const detail =()=>import ('@/views/detail/detail')
    const routes = [
  	  {
  	  		  path:"/",
  	  		 redirect:"/home"
  	  },
  	  {
  		  path:"/home",
  		  component:home
  	  },{
  		  path:"/classes",
  		  component:classes
  	  },{
  		  path:"/cart",
  		  component:cart
  	  },{
  		  path:"/profile",
  		  component:profile
  	  },{
        name:'detail',
        path:"/detail",
        component:detail
      }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
