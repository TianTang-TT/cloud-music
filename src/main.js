import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'components'

import 'static/css/reset.css'
import 'static/css/animate.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
