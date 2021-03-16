export default {
  namespaced: true,
  state: {
    isLoading: false,
    token: '',
    loginInfomation: {},
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
    }
  },
}