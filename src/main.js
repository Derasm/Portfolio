import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// pinia
import { createPinia } from "pinia";
const pinia = createPinia();
import { useHexStore } from "./store/hexStore";
//Import quasar
import "quasar/src/css/index.sass";
// Import icon libraries
import iconSet from "quasar/icon-set/material-icons";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar } from "quasar";
//Router
import router from "@/routes/router";
const myApp = createApp(App);

myApp
    .use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
        iconSet: iconSet, // icon library for the app
    })
    .use(pinia) // add the pinia store
    .use(router); // add the router

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount("#app");
const store = useHexStore();
