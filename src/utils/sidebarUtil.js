import axios from '@/api';
import store from '@/store';

export default {
  sidebarHandler() {
    return axios.post('/sidebar').then((response) => {
      store.commit('loginStore/setSidebar', response.result);
      return "setSidebar";
    });
  }
}