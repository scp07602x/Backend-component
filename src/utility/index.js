import route from './route';
import api from '@/api/store';
import store from '@/store';

if (localStorage.token) {
  getRouteAndSidebar();
}

function getRouteAndSidebar() {
  api.getRouteAndSidebar().then((response) => {
    if (response.status == 'success') {
      route.madeRoute(response.result);
      madeSidebar(response.result);
    }
  });
}

function madeSidebar(result) {
  store.commit('login/setSidebar', result);
  return "setSidebar";
}

export default {
  getRouteAndSidebar
};