import Vue from "vue";
import App from "@/App.vue";
import router from './router';
import store from './store';
import axios from './api';
import api from './api/store';
// import VueTailwindPicker from "vue-tailwind-picker";

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
  render: (h) => h(App)
}).$mount("#app");