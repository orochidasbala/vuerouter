import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../src/assets/css/style.css";
import "../src/assets/js/features.js";
// import Pagination from "vue-pagination-2";
// import "../src/assets/sass/main.css";

createApp(App).use(router).mount("#app");
