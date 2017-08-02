import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: []
  },
  mutations: {
    ADD_HISTORY (state, route) {
      state.history.push(route)
    },
    DECREASE_HISTORY (state) {
      state.history.pop()
    }
  },
  actions: {
    navigate ({ commit, state }, route) {
      commit('ADD_HISTORY', route)
    }
  }
})
