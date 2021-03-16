import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

const staticRoute = [{
  name: "index",
  path: "/",
  redirect: "/admin/dashboard",
  component: Admin,
  children: [{
    path: "/admin/dashboard",
    name: "後台首頁",
    component: () => import("@/views/admin/Dashboard.vue"),
    meta: {
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
  }, ],
}, ];

export default staticRoute;