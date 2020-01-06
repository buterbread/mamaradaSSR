import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state() {
      return {}
    },
    mutations: {},
    actions: {},
    modules: {}
  })
}
