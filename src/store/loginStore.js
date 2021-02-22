import axios from '@/api';

export default {
  namespaced: true,
  state: {
    token: "",
    loginForm: "",
    routes: [],
    sidebar: [],
  },

  mutations: {
    token(state, resultToken) {
      state.token = resultToken;
    },
    login(state, loginForm) {
      state.loginForm = loginForm;
    },
    setRouter(state, routes) {
      state.routes = routes;
    },
    setSidebar(state, sidebar) {
      state.sidebar = sidebar;
    }
  },

  actions: {
    login(context, loginForm) {
      context.commit('login', loginForm);
      return axios.post("service/login", {
          account: loginForm.username,
          password: loginForm.password
        })
        .then((response) => {
          if (response.status == 'success') {
            let resultToken = `Bearer ${response.result.token}`;
            context.commit('token', resultToken);
            context.commit('login', loginForm);
            localStorage.token = resultToken;

            return true;
          }
        });
    },
  }
}