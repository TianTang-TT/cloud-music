import Vue from 'vue'
import Router from 'vue-router'

import Home from 'view/Home'
import Music from 'view/Music'
import Recommend from 'view/recommend'

const Hot = import('view/hot')
const Search = import('view/search')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/recommend',
      children: [
        {path: 'recommend', name: '推荐音乐', component: Recommend},
        {path: 'hot', name: '热歌榜', component: Hot},
        {path: 'search', name: '搜索', component: Search}
      ]
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    }
  ]
})
