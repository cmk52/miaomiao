import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(VueRouter)

  const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  {
    path:'/*',
    redirect: '/movie' /* 重定向一下,让随便请求都重定向到movie页面 */
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,/* index.html引入图标的<%= BASE_URL %>favicon.ico base写法 */
  routes
})

export default router
