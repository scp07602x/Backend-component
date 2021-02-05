import router from './routerUtil';
import sidebar from './sidebarUtil';

if(localStorage.token){
  router.routerHandler();
  sidebar.sidebarHandler();
}
 
