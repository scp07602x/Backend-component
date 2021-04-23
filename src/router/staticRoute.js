import setting from "@/layouts/Setting.vue";
import Auth from "@/layouts/Auth.vue";

const staticRoute = [{
  name: "index",
  path: "/",
  redirect: "/admin/dashboard",
  component: setting,
  children: [{
    path: "/admin/dashboard",
    name: "dashboard",
    component: () => import("@/views/admin/Dashboard.vue"),
    meta: {
      transition: 'fade-in-up',
      requireAuth: true,
    }
  }],
  meta: {
    requireAuth: true,
  }
}, {
  name: "auth",
  path: "/auth",
  redirect: "/auth/login",
  component: Auth,
  children: [{
    name: "login",
    path: "/auth/login",
    component: () => import("@/views/auth/Login.vue"),
  }],
  meta: {
    transition: 'fade-in-up',
  }
}];

export default staticRoute;