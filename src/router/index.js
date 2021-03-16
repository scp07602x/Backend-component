import Vue from 'vue';
import VueRouter from 'vue-router';

// layouts
import staticRoute from './staticRoute';

import storage from '@/utility/storage';

// routes
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: staticRoute,
});

router.beforeEach((to, from, next) => {
    let getToken = storage.getitem('token');
    if (to.matched.length === 0) {
        next({
            path: '/auth/login',
        })
    }
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