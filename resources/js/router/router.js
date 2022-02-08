//import vue router
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue";

//define a routes
export const routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        name: "dashboard",
    },
    {
        path: "/login",
        component: Login,
        name: "login",
    },
    {
        path: "/",
        component: Login,
    },
];
