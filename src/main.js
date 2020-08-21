import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyload from 'vue-lazyload'

Vue.use(vueLazyload, {
     loading: require('@/assets/img/common/loading.svg'),//加载中图片，一定要有，不然会一直重复加载占位图
     /* error: require('img/error.png')  加载失败图片 */
});
Vue.prototype.$bus=new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
