import api from '@/api/api';
import router from '@/router';
import store from '@/store';
import storage from '@/utility/storage';
// import common from '@/utility/common';
import setting from '@/layouts/setting';

let token = storage.getitem('token');
if (token) {
  store.dispatch('common/token', token);
  necessaryParams();
}

function necessaryParams() {
  loginInfomation();
  madeRouter();
  madeSidebar();
}

function loginInfomation() {
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

function formatRoute(result) {
  let mapRoute = new Map();
  let mapBreads = new Map();
  let routes = result.map(element => {
    mapBreads.set(element.id, element)
    recursiveRoute(element.children, mapRoute, mapBreads);
    return {
      name: element.combine_id,
      path: element.children ? `/${element.children.first().category_route}` : '',
      component: setting,
      meta: {
        requireAuth: true,
        id: element.id,
        parent: element.parent_id,
      }
    }
  });

  store.dispatch('common/breadcrumbs', mapBreads);

  routes.forEach(element => {
    element.children = mapProcessing(mapRoute).filter(element => element.path !== '').filter(subElement => {
      let breads = [];
      madeBreadcrumbs(subElement.meta.id, mapBreads, breads);
      subElement.meta.breadcrumbs = breads.reverse();

      if ((subElement.path).match(element.name)) {
        subElement.children = [];
        return subElement
      }
    })
  });

  return routes;
}

function madeBreadcrumbs(id, mapBreads, breads) {
  mapBreads.forEach((v, k) => {
    if (id == k && v.parent_id !== null) {
      if (v.category_route !== null) {
        breads.push({
          name: v.name,
          path: `/${v.category_route}`
        });
      }

      mapBreads.forEach((vv, kk) => {
        if (v.parent_id == vv.combine_id && v.category !== "index" && v.category !== "indexTeb") {
          madeBreadcrumbs(kk, mapBreads, breads)
        }
      })
    }
  })
}

function recursiveRoute(data, mapRoute, mapBreads) {
  return data.map(element => {
    let path = checkPathExistsAndTransform(element.category_route);
    path = path.replace(":", "_");
    let subRoute = {
      name: `${element.name}-${element.combine_id}`,
      path: element.category_route ? `/${element.category_route}` : '',
      component: () => import(`@/views/${path}`),
      children: (element.children).length == 0 ? [] : recursiveRoute(element.children, mapRoute, mapBreads),
      meta: {
        transition: 'fade-in-up',
        requireAuth: true,
        id: element.id,
        parent: element.parent_id,
      }
    };
    mapRoute.set(element.id, subRoute);
    mapBreads.set(element.id, element)
    return subRoute;
  });
}

function mapProcessing(mapObjects) {
  return Array.from(mapObjects.values());
}

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