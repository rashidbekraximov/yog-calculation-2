import {createApp} from "vue";
import App from "./App.vue";
import store from "./store";
// import Vue from 'vue'
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
// import axiosHttp from "./axios";
// Vue.prototype.$http = axiosHttp

const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.mount("#app");
