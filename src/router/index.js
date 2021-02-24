import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import staticRoute from "./staticRoute";


// routes
Vue.use(VueRouter);

const defaultEditPath = [{
    path: "/new",
    filePath: "/category_new"
}, {
    path: "/edit",
    filePath: "/category_edit"
}, {
    path: "/:id/new",
    filePath: "/child_edit"
}, {
    path: "/:id/edit",
    filePath: "/child_edit"
}];

const router = new VueRouter({
    mode: 'history',
    routes: staticRoute,
    defaultEditPath
});

router.beforeEach((to, from, next) => {
    let getToken = localStorage.getItem('token');
    if (to.meta.requireAuth) { //是否需要登入許可權
        if (getToken) {
            next();
        } else {
            next({
                path: '/auth/login',
            })
        }
    } else {
        if (getToken) {
            if (to.path == '/auth/login') {
                next('/');
            }
        }
        next();
    }
});

export default router;