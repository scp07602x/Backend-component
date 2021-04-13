import Vue from 'vue';
import VueRouter from 'vue-router';
import staticRoute from './staticRoute';

Vue.use(VueRouter);

const createRouter = () => new VueRouter({
    mode: 'history',
    routes: staticRoute,
});

const router = createRouter();

function resetRoute() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
export {
    resetRoute
}