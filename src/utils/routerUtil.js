import router from '@/router'
import axios from '@/api';
import store from '@/store';

export default {
  routerHandler() {
    return axios.post('./router').then((response) => {
      let routeList = response.result;

      let routes = routeList.map((element) => {
        let rchildren = element.children;
        rchildren.forEach(child => {
          if (child.edit === true) {
            rchildren.push({
              "name": `編輯${child.name}`,
              "parent": `/${element.path}/${child.path}`,
              "path": `${child.path}/${child.path}Edit`,
              "edit": "self",
            });
            rchildren.push({
              "name": `編輯${child.name}`,
              "parent": `/${element.path}/${child.path}`,
              "path": `${child.path}/${child.path}Edit/:id`,
              "edit": "self",
            })
          }
        });

        let subroutes = rchildren.map(child => {
          child.path = `/${element.path}/${child.path}`;
          if (child.edit == "self") {
            child.breadcrumb = [{
                name: "首頁",
                link: "/admin/dashboard",
              },
              {
                name: (child.name).replace("編輯", ""),
                link: `${child.parent}`
              }, {
                name: child.name,
              }
            ]
          } else {
            child.breadcrumb = [{
              name: "首頁",
              link: "/admin/dashboard",
            }, {
              name: child.name,
            }];
          }

          let viewsfile = `@/views${(child.path).replace("/:id", "")}.vue`;

          return {
            path: child.path,
            component: () => import(`${viewsfile}`),
            meta: {
              requireAuth: true,
              breadcrumb: child.breadcrumb,
            }
          };
        });

        return {
          path: `${(element.children)[0].path}`,
          redirect: `${(element.children)[0].path}`,
          component: () => import("@/layouts/Setting.vue"),
          children: subroutes,
        }
      });

      store.commit('loginStore/setRouter', routes);

      routes.forEach(element => {
        router.options.routes.push(element);
      });

      return "setRouter";
    });

  }
}