import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

<<<<<<< HEAD
const home = ()=>import ('@/views/home/home')
const classes = ()=>import ('@/views/category/classes')
const cart = ()=>import ('@/views/cart/cart')
const profile = ()=>import ('@/views/profile/profile')
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
  	  }
  ]
=======
  const routes = [
  {
    path: '/',
    name: 'Home', 
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
>>>>>>> c0f183ce3d9445bcbb1091ef93dabc8b913d09da

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
