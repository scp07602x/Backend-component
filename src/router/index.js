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
import User from "@/views/setting/User.vue";


import AdPage from "@/views/setting/adpage/AdPage.vue";
import PageEdit from "@/views/setting/adpage/PageEdit.vue";
// import Editor from "@/views/setting/Editor.vue";

// views for Auth layout
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// routes
Vue.use(VueRouter);

const routes = [{
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [{
                path: "/admin/dashboard",
                component: Dashboard,
                meta: {
                    breadcrumb: [{
                        name: "首頁",
                    }],
                }
            },
            {
                path: "/admin/settings",
                component: Settings,
                meta: {
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
            // {
            //     path: "/admin/maps",
            //     component: Maps,
            // },
        ],
    },
    {
        path: "/setting",
        redirect: "/setting/user",
        component: Setting,
        children: [{
            path: "/setting/user",
            component: User,
            meta: {
                breadcrumb: [{
                    name: "首頁",
                    link: "/admin/dashboard",
                }, {
                    name: "管理者",
                }],
            }
        }, {
            path: "/setting/adpage",
            component: AdPage,
            meta: {
                breadcrumb: [{
                    name: "首頁",
                    link: "/admin/dashboard",
                }, {
                    name: "廣告頁面列表",
                }],
            },
        }, {
            path: "/setting/adpage/editor",
            component: PageEdit,
            meta: {
                breadcrumb: [{
                        name: "首頁",
                        link: "/admin/dashboard",
                    }, {
                        name: "廣告頁面列表",
                        link: "/setting/adpage",
                    },
                    {
                        name: "編輯廣告頁面內容",
                    }
                ],
            }
        }, {
            path: "/setting/adpage/editor/:id",
            component: PageEdit,
            meta: {
                breadcrumb: [{
                        name: "首頁",
                        link: "/admin/dashboard",
                    }, {
                        name: "廣告頁面列表",
                        link: "/setting/adpage",
                    },
                    {
                        name: "編輯廣告頁面內容",
                    }
                ],
            }
        }, ],
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
    {
        path: "/",
        redirect: "/admin/dashboard",
        component: Admin,
    },
    {
        path: "*",
        redirect: "/"
    },
];

const router = new VueRouter({
    routes
})

export default router;