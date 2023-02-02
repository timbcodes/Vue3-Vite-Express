import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

/**
 * Import Custom Styles Below
 */
import "./scss/normalize.scss";
import "./scss/UniversalStyles.scss";
import "./scss/mixins.scss";
import "./scss/variables.scss";

/**
 * Import Cookies Config Below
 */
import VueCookies from "vue3-cookies";

/**
 * Import External Libraries Below
 */
import vClickOutside from "click-outside-vue3";
import { Vue3Mq } from "vue3-mq";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vClickOutside);
app.use(Vue3Mq, {
  preset: "devices",
});
app.use(VueCookies);

app.mount("#app");
