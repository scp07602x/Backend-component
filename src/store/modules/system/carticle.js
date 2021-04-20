export default {
  namespaced: true,
  state: {
    articleCategory: [],
  },

  mutations: {
    articleCategory(state, articleCategory) {
      state.articleCategory = articleCategory;
    },
  },

  actions: {
    articleCategory(context, articleCategory) {
      context.commit('articleCategory', articleCategory);
    },
  }
}