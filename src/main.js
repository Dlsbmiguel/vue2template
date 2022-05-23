import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import router from "./router/routes";
import App from "./App.vue";
import store from "./store/index";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);
Vue.use(Buefy);
Vue.use(VueCompositionAPI);

const app = createApp({
  store,
  router,
  VueSweetalert2,
  render: () => h(App),
});

app.mount("#app");
