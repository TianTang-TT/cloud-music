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
        {path: 'recommend', name: 'recommend', component: Recommend},
        {path: 'hot', name: 'hot', component: Hot},
        {path: 'search', name: 'search', component: Search}
      ]
    },
    {
      path: '/music',
      name: 'music',
      component: Music
    }
  ]
})
