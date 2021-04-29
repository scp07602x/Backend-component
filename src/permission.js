import router from '@/router';
import store from '@/store';
import storage from '@/utility/storage';
import errorRoute from '@/router/errorRoute';

let once = false;

router.beforeEach((to, from, next) => {
  if (store.state.routers.list.length === 0 && !once) {
    router.options.routes = [...router.options.routes, ...errorRoute]; // 先組預設路由跟錯誤路由
    router.addRoutes(errorRoute);
    once = true;
  }

  if (to.meta.requireAuth) { //是否需要登入許可權
    if (storage.getitem('token')) {
      next();
    } else {
      next('auth');
    }
  } else {
    next();
  }
})