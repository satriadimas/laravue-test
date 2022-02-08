import Vue from "vue";
import Vuex from "vuex";
import { mutation } from "./mutation_types";
import { subject } from "./subject";

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        Username: "",
        input: {
            email: "",
            password: "",
        },
    },
    mutations: mutation,
    actions: subject,
});
