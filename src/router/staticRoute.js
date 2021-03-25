import setting from "@/layouts/setting.vue";
import Auth from "@/layouts/Auth.vue";

const staticRoute = [{
  name: "index",
  path: "/",
  redirect: "/admin/dashboard",
  component: setting,
  children: [{
    path: "/admin/dashboard",
    name: "後台首頁",
    component: () => import("@/views/admin/Dashboard.vue"),
    meta: {
      transition: 'fade-in-up',
      requireAuth: true,
    }
  }, ],
}, {
  name: "auth",
  path: "/auth",
  redirect: "/auth/login",
  component: Auth,
  children: [{
    name: "後台登入",
    path: "/auth/login",
    component: () => import("@/views/auth/Login.vue"),
  }],
  meta: {
    transition: 'fade-in-up',
  }
}, ];

export default staticRoute;