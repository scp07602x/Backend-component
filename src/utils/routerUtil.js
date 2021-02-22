import router from '@/router'
import store from '@/store';

export default {
  routerHandler(result) {
    // 將接收到的值處理成route需要的格式
    let routes = result.map((element) => {
      let subroutes = (element.children).map(child => {
        
        // 判斷檔案是否存在，如果不存在就顯示建置中頁面
        let filePath = `${child.category_route}.vue`;
        try {
          require(`@/views/${filePath}`);
        } catch (e) {
          filePath = `error/building.vue`;
        }

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

    // 路由塞進store
    store.commit('loginStore/setRouter', routes);
    // 添加路由
    routes.forEach(element => {
      router.options.routes.push(element);
    });
    router.addRoutes(routes);
    // 回傳一個值，便於async、await運用
    return "setRouter";
  }
}