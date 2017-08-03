import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: [],
    operate: ''
  },
  mutations: {
    ADD_HISTORY (state, route) {
      state.history.push(route)
      state.operate = 'forward'
    },
    DECREASE_HISTORY (state, index) {
      state.history.splice(index + 1)
      state.operate = 'back'
    }
  },
  actions: {
    navigate ({ commit, state }, toRoute) {
      const index = state.history.findIndex(route => {
        console.log(`routepath:${route.path}`)
        console.log(`toRoutePaht:${toRoute.path}`)
        return route.path === toRoute.path
      })
      console.log(`index: ${index}`)
      if (index < 0) {
        return commit('ADD_HISTORY', toRoute)
      } else if (index === state.history.length - 1) {
        return
      } else {
        return commit('DECREASE_HISTORY', index)
      }
    }
  }
})
