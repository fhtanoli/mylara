require("./bootstrap");
require("admin-lte");

window.Vue = require("vue");
import moment from "moment";
import { Form, HasError, AlertError } from "vform";
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000
});
window.Toast = Toast;
import Vue from "vue";
import VueRouter from "vue-router";
import VueProgressBar from "vue-progressbar";
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);
// let routes = [
//     {
//         path: "/dashboard",
//         component: require("./components/Dashboard.vue").default
//     },
//     {
//         path: "/developer",
//         component: require("./components/Developer.vue").default
//     },
//     {
//         path: "/profile",
//         component: require("./components/Profile.vue").default
//     },
//     { path: "/users", component: require("./components/Users.vue").default }
// ];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px"
});

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.filter("upText", function(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});
Vue.filter("myDate", function(created) {
    return moment(created).format("MMMM Do YYYY");
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
window.Fire = new Vue();

const app = new Vue({
    el: "#app",
    router
});
