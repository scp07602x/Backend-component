import axios from '@/api';

export default {
  namespaced: true,
  state: {
    loginForm: "",
    routes: [],
    sidebar: [],
  },

  mutations: {
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
      return axios.post("/login", {
          name: loginForm.username,
          password: loginForm.password
        })
        .then((response) => {
          if (response.status == 'success') {
            let resultToken = `Bearer ${response.result.token}`;
            localStorage.token = resultToken;
            context.commit('login', loginForm);

            return true;
          }
        });
    },
  }
}