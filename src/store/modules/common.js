export default {
  namespaced: true,
  state: {
    isLoading: false,
    fullLoading: true,
    token: '',
    loginInfomation: {},
    breadcrumbs: {},
  },

  mutations: {
    isLoading(state, status) {
      state.isLoading = status;
    },
    fullLoading(state, status) {
      state.fullLoading = status;
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
    fullLoading(context, status) {
      context.commit('fullLoading', status);
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