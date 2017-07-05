import Vue from 'vue'
import Router from 'vue-router'

import Home from 'view/Home'
import Music from 'view/Music'

const Recommend = import('view/recommend')
const Hot = import('view/hot')
const Search = import('view/search')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path: 'hot', name: 'hot', component: Hot},
        {path: 'recommend', name: 'recommend', component: Recommend},
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
