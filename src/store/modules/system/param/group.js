export default {
  namespaced: true,
  state: {
    list: [],
    
  },

  mutations: {
    list(state, paramGroup) {
      state.list = paramGroup;
    },
  },

  actions: {
    list(context, paramGroup) {
      context.commit('list', paramGroup);
    },
  }
}