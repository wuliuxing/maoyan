export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  // 子路由
  children: [
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'NowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'ComingSoon',
      component: () => import('@/components/ComingSoon')
    },
    // 默认 进入页面就显示正在热映
    {
      path: '/movie',
      redirect: '/movie/NowPlaying'
    }
  ]
}
