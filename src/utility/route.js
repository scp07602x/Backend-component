import router from '@/router'
import store from '@/store';
import staticRoute from "@/router/staticRoute";
import resetRoute from '@/router/resetRoute';

export default {
  // 判斷檔案是否存在，如果不存在就顯示建置中頁面
  checkPathExists(path) {
    let filePath = `${path}.vue`;
    try {
      require(`@/views/${filePath}`);
    } catch (e) {
      filePath = `error/building.vue`;
    }
    return filePath;
  },

  pushRoute(list) {
    store.commit('login/setRouter', []);
    store.commit('login/setRouter', list);
    resetRoute.index();
    router.options.routes = [...staticRoute, ...list];
    router.addRoutes(list);
  },

  madeRoute(result) {
    // 將接收到的值處理成route需要的格式
    let routes = result.map((element) => {
      let subroutes = (element.children).map(child => {
        let filePath = this.checkPathExists(child.category_route);

        return {
          name: child.id,
          path: `/${child.category_route}`,
          component: () => import(`@/views/${filePath}`),
          meta: {
            requireAuth: true,
            breadcrumb: [{
              name: "首頁",
              link: "/admin/dashboard",
            }, {
              name: child.name,
            }],
          }
        };
      });

      return {
        name: element.id,
        path: `/${(element.children)[0].category_route}`,
        redirect: `/${(element.children)[0].category_route}`,
        component: () => import("@/layouts/Setting.vue"),
        children: subroutes,
      }
    });

    this.pushRoute(routes);

    return "setRouter";
  },

  pushChildRoute(parentId, fullPath, editPath, title) {
    let newRoute = (store.state.login.routes).map(element => {
      if (element.name == parentId) {
        editPath.forEach(child => {
          let filePath = this.checkPathExists(child.filePath);
          element.children.push({
            path: `${fullPath}${child.path}`,
            component: () => import(`@/views/${filePath}`),
            meta: {
              requireAuth: true,
              breadcrumb: [{
                name: "首頁",
                link: "/admin/dashboard",
              }, {
                name: title,
                link: `${fullPath}`,
              }, {
                name: `新增/編輯 - ${title}`
              }],
            }
          })
        });
        return element;
      } else {
        return element;
      }
    })

    this.pushRoute(newRoute);

    return "pushChildRoute";
  }
}