import api from '@/api/api';
import router from '@/router';
import store from '@/store';
import storage from '@/utility/storage';
import common from '@/utility/common';
import setting from '@/layouts/setting';

let token = storage.getitem('token');
if (token) {
  store.dispatch('common/token', token);
  necessaryParams();
}

function necessaryParams() {
  loginPersonInfomation();
  madeRouter();
  madeSidebar();
}

function loginPersonInfomation() {
  api.serviceInfomation().then(response => store.dispatch('common/loginInfomation', response));
}

function madeRouter() {
  api.serviceRouter().then(response => {
    let routes = formatRoute(response); // 處理加入路由格式
    router.options.routes = [...router.options.routes, ...routes]; // 加入路由
    router.addRoutes(routes);
    store.dispatch('routers/list', routes) // 路由推到store
  });
}

function madeSidebar() {
  api.serviceSidebar().then(response => store.dispatch('sidebar/list', response));
}

// function formatRoute(result) {
//   return result.map(element => {
//     return {
//       name: element.combine_id,
//       path: element.children ? `/${element.children[0].category_route}` : '',
//       component: setting,
//       children: recursiveRoute(element.children),
//       meta: {
//         requireAuth: true,
//       }
//     }
//   });
// }

// function recursiveRoute(data) {
//   return data.map(element => {
//     let path = checkPathExistsAndTransform(element.category_route);
//     return {
//       name: `${element.name}-${element.combine_id}`,
//       path: element.category == 'tab' ? `/${element.return_route}/${element.subject_id}` : `/${element.category_route}`,
//       // component: setting,
//       component: () => import(`@/views/${path}`),
//       children: (element.children).length == 0 ? [] : recursiveRoute(element.children),
//       meta: {
//         requireAuth: true,
//         breadId:element.id        
//       }
//     };
//   });
// }

function checkPathExistsAndTransform(path) {
  let filePath = `${path}.vue`;
  filePath = filePath.replace(":", "_");
  try {
    require(`@/views/${filePath}`);
  } catch (e) {
    filePath = `error/building.vue`;
  }
  return filePath;
}

export {
  necessaryParams
};






function formatRoute(result) {
  let mapRoute = new Map();
  let routes = result.map(element => {
    recursiveRoute(element.children, mapRoute)
    return {
      name: element.combine_id,
      path: element.children ? `/${common.arrayFirst(element.children).category_route}` : '',
      component: setting,
      meta: {
        requireAuth: true,
      }
    }
  });
  routes.forEach(element => {
    element.children = mapProcessing(mapRoute).filter(subElement => {
      if ((subElement.path).match(element.name)) {
        subElement.children = [];
        return subElement
      }
    })
  });

  return routes;
}

function recursiveRoute(data, mapRoute) {
  return data.map(element => {
    let path = checkPathExistsAndTransform(element.category_route);
    path = path.replace(":", "_");
    let subRoute = {
      name: `${element.name}-${element.combine_id}`,
      path: element.category_route ? `/${element.category_route}` : '',
      component: () => import(`@/views/${path}`),
      children: (element.children).length == 0 ? [] : recursiveRoute(element.children, mapRoute),
      meta: {
        requireAuth: true,
        navId: element.id
      }
    };
    mapRoute.set(element.id, subRoute);
    return subRoute;
  });
}

function mapProcessing(mapObjects) {
  let newArray = Array.from(mapObjects.values());
  return newArray.filter(element => element.path !== '');
}