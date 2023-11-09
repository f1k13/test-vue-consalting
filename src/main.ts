import { createApp } from "vue";
import App from "./app/App.vue";
import store from "./entities/store";

const app = createApp(App);

app
  .use(store)

  .mount("#app");
