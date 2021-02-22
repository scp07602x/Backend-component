import Vue from "vue";
import App from "@/App.vue";
import router from './router';
import store from './store';

// api
import axios from './api';
import api from './api/store';

// form vaildate
import * as validate from './validate';

// utils
import * as utils from './utils';

// loading
import VLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";
// import "@/assets/styles/layout.scss";


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$routerList = router.routes;
// Vue.use(VueLoading, /** options **/)
Vue.component('VLoading', VLoading);


new Vue({
  router,
  store,
  axios,
  api,
  utils,
  validate,
  // VueLoading,
  render: (h) => h(App)
}).$mount("#app");

