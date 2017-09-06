import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let token = sessionStorage.getItem('token')
  if (!token) {
    sessionStorage.setItem('token', Date.now())
    next({path: '/welcome'})
  } else {
    next()
  }
})

export default router
