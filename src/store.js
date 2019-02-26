import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const home = {
  namespaced: true,
  state: {
    nowCity: '上海',
    inputVal: ''
  },
  mutations: {
    updateNowCity(state, _c) {
      state.nowCity = _c;
    },
    updateInputVal(state, _v) {
      state.inputVal = _v
    }
  },
}


export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {

  },
  modules: {
    home
  }
})