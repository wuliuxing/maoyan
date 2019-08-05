import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)
Vue.prototype.$axios=Axios; 
Vue.config.productionTip = false

Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);   //遇到w.h修改为arg数据
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
