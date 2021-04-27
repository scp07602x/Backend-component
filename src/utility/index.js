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

const token = storage.getitem('token');

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

    resetRoute(); // 每次執行前清空動態路由

    router.options.routes = [...staticRoute, ...routes, ...errorRoute]; // 加到devtools路由清單

    router.addRoutes([...routes, ...errorRoute]); // 加入路由

    store.dispatch('routers/list', routes); // 路由推到store
  });
}

function getSiderbar() {
  api.serviceSidebar().then(response => {

    response.forEach(firstStep => {

      firstStep.children = firstStep.children.map(secondStep => {

        secondStep.category_route = secondStep.category_route.strReplace('/', ':', secondStep.subject_id);

        return secondStep;
      })
    })

    store.dispatch('sidebar/list', response);
  });
}

/**
 * 
 * @param {Array} data 
 * @returns 
 */
function formatRoute(data) {
  const breadMap = new Map();

  const routes = data.map(element => {

    const result = getFormatRoute(element);

    result.component = setting; // getFormatRoute會判斷物件內有沒有component，預設取出來沒有所以另外加

    breadMap.set(element.id, element); // 資料塞進Map待用

    if (element.children.length > 0) {

      const childs = getChildRoute(element.children, breadMap);

      result.children = childs.map(child => {
        return getFormatRoute(child)
      });
    }

    return result;
  });

  store.dispatch('common/breadcrumbs', breadMap);

  routes.forEach(element => {

    element.children.forEach(el => {
      const breads = getBreadcrumbsWithRoute(el.meta.selfId, breadMap);
      el.meta.breadcrumbs = breads.reverse();
    })
  })

  return routes;
}

/**
 * 
 * @param {Object} route 
 * @returns 
 */
function getFormatRoute(route) {

  const result = {};

  result.name = route.id;

  if (route.category_route) {

    result.path = `/${route.category_route}`;
  } else {

    result.path = route.children.length ? `/${route.children.first().category_route}` : '';
  }

  if (route.component) {
    result.component = route.component;
  }

  result.meta = {};

  result.meta.requireAuth = true;

  result.meta.selfId = route.id;

  result.meta.name = route.name;

  if (route.parent_id) {
    result.meta.parent = route.parent_id;
  }

  return result;
}

/**
 * 
 * @param {String} id 
 * @param {Map} breadMap 
 * @param {Array} breads 
 * @returns 
 */
function getBreadcrumbsWithRoute(id, breadMap, breads = []) {

  const {
    parent_id,
    category,
    category_route,
    name,
    subject_id
  } = breadMap.get(id);

  if (category_route) {
    breads.push({
      name: name,
      path: `/${category_route}`,
      subjectId: subject_id
    });
  }

  breadMap.forEach((value, key) => {
    if (parent_id == value.combine_id && category !== "index" && category !== "indexTeb") {
      getBreadcrumbsWithRoute(key, breadMap, breads);
    }
  })

  return breads;
}

/**
 * 
 * @param {Object} data 
 * @param {Map} breadMap 
 * @param {Array} childs 
 * @returns 
 */
function getChildRoute(data, breadMap, childs = []) {
  data.forEach(element => {
    breadMap.set(element.id, element); // 需要所有階層資料所以不能過去沒有路由的選項

    if (element.category_route) {

      const result = {}

      result.component = () => import(`@/views/${checkFileExists(element.category_route)}`);

      childs.push({
        ...element,
        ...result
      })
    }

    if (element.children.length > 0) {
      getChildRoute(element.children, breadMap, childs);
    }
  })

  return childs;
}

/**
 * 
 * @param {String} path 
 * @returns 
 */
function checkFileExists(path) {
  let filePath = `${path.replace(/:/g, "_")}.vue`;

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