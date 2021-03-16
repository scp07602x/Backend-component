export default {
  namespaced: true,
  state: {
    list: [],
  },

  mutations: {
    list(state, result) {
      state.list = result;
    }
  },

  actions: {
    list(context,result) {
     context.commit('list',result)
    }
  }
}