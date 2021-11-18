import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false,
    coin: 0,
    days: 0,
    continuity: 0
  },
  mutations: {
    changeLogined(state, bool) {
      state.logined = bool;
    },
    setCoin(state, coin) {
      state.coin = coin;
    },
    setDays(state, days) {
      state.days = days;
    },
    setContinuity(state, continuity) {
      state.continuity = continuity;
    }
  },
  actions: {
  },
  modules: {
  }
})
