import Admin from "@/layouts/Admin.vue";
import Auth from "@/layouts/Auth.vue";

const staticRoute = [{
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
    component: () => import("@/views/auth/Login.vue"),
  }, ],
}, ];

export default staticRoute;