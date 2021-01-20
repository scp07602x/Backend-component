import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Setting from "@/layouts/Setting.vue";

// views for Admin layout
import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
// import Maps from "@/views/admin/Maps.vue";

// views for Setting Layout
import Managers from "@/views/setting/managers/Managers.vue";


import AdPage from "@/views/setting/adpage/AdPage.vue";
import PageEdit from "@/views/setting/adpage/PageEdit.vue";
// import Editor from "@/views/setting/Editor.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
// import axios from "axios";

import store from '@/store';

// routes
Vue.use(VueRouter);

const routes = [{
        path: "/",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [{
                path: "/admin/dashboard",
                component: Dashboard,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                        name: "首頁",
                    }],
                }
            },
            {
                path: "/admin/settings",
                component: Settings,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                        name: "首頁",
                        link: "/admin/dashboard",
                    }, {
                        name: "設定",
                    }],
                }
            },
            {
                path: "/admin/tables",
                component: Tables,
            },
        ],
    },
    {
        path: "/setting",
        redirect: "/setting/managers",
        component: Setting,
        children: [{
                path: "/setting/managers",
                component: Managers,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                        name: "首頁",
                        link: "/admin/dashboard",
                    }, {
                        name: "後台管理者列表",
                    }],
                }
            }, {
                path: "/setting/adpage",
                component: AdPage,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                        name: "首頁",
                        link: "/admin/dashboard",
                    }, {
                        name: "活動頁面列表",
                    }],
                    editpath: "/setting/adpage/editor",
                },
            }, {
                path: "/setting/adpage/editor",
                component: PageEdit,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                            name: "首頁",
                            link: "/admin/dashboard",
                        }, {
                            name: "活動頁面列表",
                            link: "/setting/adpage",
                        },
                        {
                            name: "編輯活動頁面內容",
                        }
                    ],
                }
            },
            {
                path: "/setting/adpage/editor/:id",
                component: PageEdit,
                meta: {
                    requireAuth: true,
                    breadcrumb: [{
                            name: "首頁",
                            link: "/admin/dashboard",
                        }, {
                            name: "活動頁面列表",
                            link: "/setting/adpage",
                        },
                        {
                            name: "編輯活動頁面內容",
                        }
                    ],
                }
            },
        ],
    },
    {
        path: "/auth",
        redirect: "/auth/login",
        component: Auth,
        children: [{
                path: "/auth/login",
                component: Login,
            },
            {
                path: "/auth/register",
                component: Register,
            },
        ],
    },
    // {
    //     path: "/",
    //     redirect: "/admin/dashboard",
    //     component: Admin,
    // },
    // {
    //     path: "*",
    //     redirect: "/"
    // },
];


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { //是否需要登入許可權
        // localStorage.removeItem('token');
        let token = localStorage.getItem('token');

        if (token) {

            // 處理這邊
            console.log(store);
            let test = JSON.parse(store.state.routers);
            if(localStorage.getItem('routers')){
                router.addRoutes(test);
                test.forEach(element => {
                     router.options.routes.push(element);
                     console.log(router.options.routes);
                });
                localStorage.removeItem('routers');
            }


            next();
        } else {
            next({
                path: '/auth/login',
                // query: {
                //     redirect: to.fullPath
                // }
            })
        }
    } else {
        next();
    }
});
export default router;