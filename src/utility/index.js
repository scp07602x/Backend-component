import api from '@/ajax/api';
import router from '@/router';
import store from '@/store';
import storage from '@/utility/storage';
import setting from '@/layouts/Setting';
import {
  resetRoute
} from '@/router';
import staticRoute from "@/router/staticRoute";
import errorRoute from '@/router/errorRoute';


let token = storage.getitem('token');
if (token) {
  store.dispatch('common/token', token);
  init();
}

function init() {
  getloginInfomation();
  getRoute();
  getSiderbar();
}

function getloginInfomation() {
  api.serviceInfomation().then(response => store.dispatch('common/loginInfomation', response));
}

function getRoute() {
  api.serviceRouter().then(response => {
    let routes = formatRoute(response); // 處理加入路由格式
    resetRoute();
    router.options.routes = [...staticRoute, ...routes, ...errorRoute]; // 加入路由
    router.addRoutes(routes);
    router.addRoutes(errorRoute);
    store.dispatch('routers/list', routes); // 路由推到store
  });
}

function getSiderbar() {
  api.serviceSidebar().then(response => store.dispatch('sidebar/list', response));
}

function formatRoute(data) {
  const routeMap = new Map();
  const breadMap = new Map();
  const routes = data.map(element => {
    breadMap.set(element.id, element);
    getChildRoute(element.children, routeMap, breadMap);

    const result = {};
    result.name = element.combine_id;
    result.path = element.children ? `/${element.children.first().category_route}` : '';
    result.component = setting;
    result.meta = {};
    result.meta.requireAuth = true;
    if (element.parent_id !== null) {
      result.meta.parent = element.parent_id;
    }

    return result;
  });

  store.dispatch('common/breadcrumbs', breadMap);
  routes.forEach(element => {
    element.children = Array.from(routeMap.values()).filter(element => element.path !== '').filter(subElement => {
      const breads = [];
      getBreadcrumbsWithRoute(subElement.meta.id, breadMap, breads);
      subElement.meta.breadcrumbs = breads.reverse();
      if ((subElement.path).match(element.name)) {
        delete subElement.children;
        return subElement;
      }
    })
  });

  return routes;
}

function getBreadcrumbsWithRoute(id, breadMap, breads) {
  breadMap.forEach((v, k) => {
    if (id == k && v.parent_id !== null) {
      if (v.category_route !== null) {
        breads.push({
          name: v.name,
          path: `/${v.category_route}`
        });
      }

      breadMap.forEach((vv, kk) => {
        if (v.parent_id == vv.combine_id && v.category !== "index" && v.category !== "indexTeb") {
          getBreadcrumbsWithRoute(kk, breadMap, breads);
        }
      })
    }
  })
}

function getChildRoute(data, routeMap, breadMap) {
  return data.map(element => {
    breadMap.set(element.id, element);

    let subRoute = {};
    subRoute.name = `${element.name}-${element.combine_id}`;
    subRoute.path = element.category_route ? `/${element.category_route}` : '';
    if (element.category_route !== null) {
      let path = checkFileExists(element.category_route);
      subRoute.component = () => import(`@/views/${path}`);
    }
    if (element.children.length > 0) {
      subRoute.children = getChildRoute(element.children, routeMap, breadMap);
    }
    subRoute.meta = {};
    subRoute.meta.requireAuth = true;
    subRoute.meta.id = element.id;
    if (element.parent_id !== null) {
      subRoute.meta.parent = element.parent_id;
    }
    subRoute.meta.transition = 'fade-in-up';

    routeMap.set(element.id, subRoute);
    return subRoute;
  });
}

function checkFileExists(path) {
  let filePath = `${path.replace(":", "_")}.vue`;
  try {
    require(`@/views/${filePath}`);
  } catch (e) {
    filePath = `error/building.vue`;
  }
  return filePath;
}

export {
  init
};