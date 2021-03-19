export default {
  namespaced: true,
  state: {
    list: [],
    subPath: "",
    subCategory: {},
  },

  mutations: {
    list(state, menu) {
      state.list = menu;
    },

    subPagePath(state, subPath) {
      state.subPath = subPath;
    },

    subCategory(state, data) {
      state.subCategory = data;
    },
  },

  actions: {
    list(context, menu) {
      context.commit('list', menu);
    },

    subPagePath(context, subPath) {
      context.commit('subPagePath', subPath);
    },

    subCategory(context, data) {
      context.commit('subCategory', data);
    },
  }
}