import Vue from 'vue'
import Vuex from 'vuex'

// 引入modules
import login from './login'
import adpage from './adpage'
import manager from './manager'
import menu from './menu'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
  },

  mutations: {
    isLoading(state, status) {
      state.isLoading = status;
    }
  },
  actions: {
    isLoading(context, status) {
      context.commit('isLoading', status);
    }
  },

  modules: {
    login,
    adpage,
    manager,
    menu,
  }
});