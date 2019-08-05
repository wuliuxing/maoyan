import Vue from 'vue'
import Router from 'vue-router'
import movieRoter from './movie'
import cinemaRoter from './cinema'
import mineRoter from './mine'
import searchRoter from './search'
import detailRoter from '@/views/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 底部三个大块栏目
    movieRoter,
    cinemaRoter,
    mineRoter,
    searchRoter,
    {
      path : '/detail/:id',
      name:'detailRoter',
      component:detailRoter
    },
    {
      //  路由/域名都不匹配进入movie
      path: '/*',
      redirect: '/movie'
    }
  ]
})
