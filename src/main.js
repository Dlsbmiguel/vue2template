import Vue from "vue";
import VueCompositionAPI, { createApp, h } from "@vue/composition-api";
import router from "./router/routes";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);
Vue.use(VueCompositionAPI);

const app = createApp({
  router,
  render: () => h(App),
});

app.mount("#app");
