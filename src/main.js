import Vue from "vue";
import App from "@/App.vue";
import router from './router';
import store from './store';

// api
import axios from './api';
import api from './api/store';


// form vaildate
import validate from './validate';

// styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
// Vue.use(VueTailwindPicker);

new Vue({
  router,
  store,
  axios,
  api,
  validate,
  render: (h) => h(App)
}).$mount("#app");