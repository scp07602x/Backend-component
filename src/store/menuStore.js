import api from '@/api/store';

export default {
  namespaced: true,
  state: {
    menu: [],
  },

  mutations: {
    getMenu(state, menu) {
      state.menu = menu;
    }
  },

  actions: {
    getMenu(context) {
      return api.getRouteAndSidebar().then(response => {
        context.commit('getMenu', response.result);
        return true;
      })
    }
  }
}