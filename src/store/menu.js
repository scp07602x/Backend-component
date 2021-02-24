import api from '@/api/store';

export default {
  namespaced: true,
  state: {
    menuList: [],
  },

  mutations: {
    getMenu(state, menu) {
      state.menuList = menu;
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