import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";

// routes
Vue.use(VueRouter);

const routes = [{
    name: "index",
    path: "/",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [{
        path: "/admin/dashboard",
        component: () => import("@/views/admin/Dashboard.vue"),
        meta: {
            requireAuth: true,
            breadcrumb: [{
                name: "首頁",
            }],
        }
    }, ],
}, {
    name: "auth",
    path: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [{
        name: "auth.login",
        path: "/auth/login",
        component: Login,
    }, ],
}, ];


const router = new VueRouter({
    mode: 'history',
    routes
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