import store from '@/store';

export default {
  sidebarHandler(result) {
    store.commit('loginStore/setSidebar', result);
    return "setSidebar";
  }
}