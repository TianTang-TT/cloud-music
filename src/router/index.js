import Vue from 'vue'
import Router from 'vue-router'

import Home from 'view/Home'
import Music from 'view/Music'
import Recommend from 'view/recommend'

const Hot = () => import('view/hot')
const Search = () => import('view/search')

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
      path: '/music',
      name: 'music',
      component: Music
    }
  ]
})
