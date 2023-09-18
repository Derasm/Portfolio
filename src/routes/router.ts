import MainPageVue from "@/views/MainPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/portfolio",
        name: "Main Page",
        component: MainPageVue,
    },
    {
        path: "/devops",
        name: "DevOps",
        component: import("@/views/DevOps.vue"),
    },
    // {
    //     path: "/Hexgrid",
    //     name: "Hexgrid",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "Hexgrid" */ "@/views/HexGridView.vue"),
    // },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
