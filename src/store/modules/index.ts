import { Module } from "vuex";

import { StateInterface } from "../index";
import { FeedStateInterface } from "./models";
import state from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";


const feedModule: Module<FeedStateInterface, StateInterface> = {
    // namespaced: true,  # Maybe for future but alters how $store is called within view pages
    actions,
    getters,
    mutations,
    state,
}

export default feedModule
