import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomeComponent.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () => import("../components/ListComponent.vue"),
    },
    {
      path: "/details/:id",
      name: "list-details",
      component: () => import("../components/DetailsComponent.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddComponent.vue"),
    },
  ],
});
