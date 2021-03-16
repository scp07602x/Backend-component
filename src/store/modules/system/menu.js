export default {
  namespaced: true,
  state: {
    list: [],
    subPath: "",
  },

  mutations: {
    list(state, menu) {
      state.list = menu;
    },

    subPagePath(state, subPath) {
      state.subPath = subPath;
    },
  },

  actions: {
    list(context, menu) {
      context.commit('list', menu);
    },

    subPagePath(context, subPath) {
      context.commit('subPagePath', subPath);
    }
  }
}