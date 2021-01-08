import Vue from "vue";
import VueRouter from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";
import Setting from "@/layouts/Setting.vue";

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue";
import Settings from "@/views/admin/Settings.vue";
import Tables from "@/views/admin/Tables.vue";
import Maps from "@/views/admin/Maps.vue";
import Editor from "@/views/admin/Editor.vue";

// views for Setting Layout

import User from "@/views/setting/User.vue";

// views for Auth layout

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

// views without layouts

import Landing from "@/views/Landing.vue";
import Profile from "@/views/Profile.vue";
// import Index from "@/views/Index.vue";

// routes

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
      {
        path: "/admin/maps",
        component: Maps,
      },
      {
        path: "/admin/editor",
        component: Editor,
        meta: {
          breadcrumb: [{
            name: "首頁",
            link: Dashboard,
          }, {
            name: "",
          }],
        }
      },
    ],
  },
  {
    path: "/setting",
    redirect: "/setting/user",
    component: Setting,
    children: [{
      path: "/setting/user",
      component: User,
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
    path: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    component: Profile,
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

// app config

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");