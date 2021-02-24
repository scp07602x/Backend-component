import Router from 'vue-router';
import router from '@/router'
import staticRoute from './staticRoute' //静态路由

export default {
 index() {
   const newRouter = new Router({
     routes: staticRoute
    });
    router.matcher = newRouter.matcher;
  }
}