import ErrorPage from "@/layouts/ErrorPage.vue";

const errorRoute = [{
  name: "error",
  path: "/404",
  component: ErrorPage,
}, {
  path: "*",
  redirect: '/404',
}];

export default errorRoute;