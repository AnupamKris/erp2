import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LitepieDatepicker from "litepie-datepicker";

createApp(App)
  .use(LitepieDatepicker)
  .use(store)
  .use(router)
  .mount("#app");
