import axios from '@/api'
import router from '@/router'
export default {
  namespaced: true,
  state: {
    loginForm: "",
    routers: [],
  },

  mutations: {
    loginIn(state, loginForm) {
      state.loginForm = loginForm;
    },
    routerList(state, testRouter) {
      state.routers = testRouter;
    }
  },

  actions: {
    loginIn(context, loginForm) {
      context.commit('loginIn', loginForm);
      axios.post("/login", {
          su_uid: loginForm.username,
          su_pass: loginForm.password,
        })
        .then((response) => {
          if (response.StatusCode == 200) {
            localStorage.token = response.Data.send_str;

            // 登入的時候依照data給路由
            let testrouter = [{
              "path": "/test",
              "children": [{
                  "path": "/test/a",
                  "name": "我是A"
                },
                {
                  "path": "/test/b",
                  "name": "我是B"
                },
              ],
            }, ];

            // 先將路由存在storage
            localStorage.routers = JSON.stringify(testrouter);
            // 再將路由存在store
            context.commit('routerList', testrouter);
            // 然後添加路由進去，但是畫面重新整理後路由會不見，所以必須到在路由index中加入他加入完就清除
            router.addRoutes(testrouter);

            router.replace({
              path: "/admin/dashboard",
            });
          }
        });
    }
  },
}