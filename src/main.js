import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import * as permission from '@/permission.js'

// api
import axios from '@/ajax';
import api from '@/ajax/api';

import * as VuePageTransition from '@/plugins/vuePageTransition';

// form vaildate
import * as validate from '@/plugins/validate';

// editor
import * as tinymce from '@/plugins/tinymce';

// utility
import * as utility from '@/utility';
import * as common from '@/utility/common';
import storage from '@/utility/storage'

// loading
import VLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// styles
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/layout.scss';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$storage = storage;
Vue.prototype.$utility = utility;
Vue.prototype.$common = common;
Vue.component('VLoading', VLoading);

new Vue({
  router,
  store,
  permission,
  axios,
  api,
  VuePageTransition,
  utility,
  validate,
  storage,
  tinymce,
  common,
  render: (h) => h(App)
}).$mount("#app");