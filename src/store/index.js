import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    coin: 0
  },
  mutations: {
    changeLogined(state, bool) {
      state.logined = bool;
    },
    setCoin(state, coin) {
      state.coin = coin;
    }
  },
  actions: {
  },
  modules: {
  }
})
