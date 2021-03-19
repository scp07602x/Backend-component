export default {
  namespaced: true,
  state: {
    isLoading: false,
    token: '',
    loginInfomation: {},
    breadcrumbs: {},
  },

  mutations: {
    isLoading(state, status) {
      state.isLoading = status;
    },
    token(state, resultToken) {
      state.token = resultToken;
    },
    loginInfomation(state, infomation) {
      state.loginInfomation = infomation;
    },
    breadcrumbs(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs;
    },
  },
  actions: {
    isLoading(context, status) {
      context.commit('isLoading', status);
    },
    token(context, token) {
      context.commit('token', token);
    },
    loginInfomation(context, infomation) {
      context.commit('loginInfomation', infomation);
    },
    breadcrumbs(context, breadcrumbs) {
      context.commit('breadcrumbs', breadcrumbs);
    },
  },
}