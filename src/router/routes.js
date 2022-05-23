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
      path: "/login",
      name: "login",
      component: () => import("../components/forms/LogInFormComponent.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../components/forms/RegisterFormComponent.vue"),
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import("../components/CategoryComponents/ListComponent.vue"),
    },
    {
      path: "/details/:id",
      name: "listDetails",
      component: () =>
        import("../components/CategoryComponents/DetailsComponent.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () =>
        import("../components/CategoryComponents/AddComponent.vue"),
    },
    {
      path: "/userList",
      name: "userList",
      component: () => import("../components/UserComponents/ListComponent.vue"),
    },
    {
      path: "/userDetails/:id",
      name: "userDetails",
      component: () =>
        import("../components/UserComponents/DetailsComponent.vue"),
    },
    {
      path: "/productsList",
      name: "productsList",
      component: () =>
        import("../components/ProductsComponents/ListComponent.vue"),
    },
    {
      path: "/productsDetails/:id",
      name: "productsDetails",
      component: () =>
        import("../components/ProductsComponents/DetailsComponent.vue"),
    },
    {
      path: "/addProduct",
      name: "addProduct",
      component: () =>
        import("../components/ProductsComponents/AddComponent.vue"),
    },
    {
      path: "/addCategoryToProduct/:id",
      name: "addCategoryToProduct",
      component: () =>
        import("../components/ProductsComponents/AddCategoryToProduct.vue"),
    },
  ],
});
