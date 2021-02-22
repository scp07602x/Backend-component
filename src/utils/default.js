import router from './routerUtil';
import sidebar from './sidebarUtil';
import api from '@/api/store';

export default {
  getRouteAndSidebar() {
    api.getRouteAndSidebar().then((response) => {
      if (response.status == 'success') {
        router.routerHandler(response.result);
        sidebar.sidebarHandler(response.result);
      }
    });
  }
}