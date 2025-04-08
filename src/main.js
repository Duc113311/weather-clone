/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import './assets/css/variables.css'; // Đường dẫn tới tệp variables.css
import "./assets/css/light-theme.css"; // Đường dẫn tới tệp variables.css
import "./assets/css/dark-theme.css"; // Đường dẫn tới tệp variables.css

// eslint-disable-next-line prettier/prettier
import ElementPlus from "element-plus";
// eslint-disable-next-line prettier/prettier
import "element-plus/dist/index.css";
import "../src/assets/css/style.css";
import "../src/assets/css/fonts.css";
import "../src/assets/style/tailwind.css";
import "../src/assets/style/global.css";

import i18n from "./locales/i18n";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(VueApexCharts);
console.log("i18n-data", i18n);

app.use(store);
app.use(router);
app.use(ElementPlus);
app.use(i18n);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.mount("#app");
