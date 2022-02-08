/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("app-component", require("./components/App.vue").default);
Vue.component("login-component", require("./components/Login.vue").default);

Vue.component(
    "dashboard-component",
    require("./components/Dashboard.vue").default
);

import VueRouter from "vue-router";
import { routes } from "./router/router";
import Vue from "vue";
import { store } from "./store/store";

Vue.use(VueRouter);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("user-token");
    if (to.name !== "login" && !token) next({ name: "login" });
    else next();
});

const app = new Vue({
    el: "#app",
    store: store,
    router,
}).$mount("#app");
