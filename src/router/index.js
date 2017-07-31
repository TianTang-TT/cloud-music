import Vue from 'vue'
import Router from 'vue-router'

import Home from 'view/home'
import Play from 'view/play'
import Recommend from 'view/home/recommend'

const Hot = () => import('view/home/hot')
const Search = () => import('view/home/search')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/recommend',
      children: [
        {path: 'recommend', name: '推荐音乐', component: Recommend, meta: {index: 1, cat: 'home'}},
        {path: 'hot', name: '热歌榜', component: Hot, meta: {index: 2, cat: 'home'}},
        {path: 'search', name: '搜索', component: Search, meta: {index: 3, cat: 'home'}}
      ]
    },
    {
      path: '/play',
      name: 'play',
      component: Play
    }
  ]
})
