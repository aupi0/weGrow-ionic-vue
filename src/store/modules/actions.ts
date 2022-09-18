import { ActionTree } from "vuex";

import { FeedStateInterface } from "./models";
import { StateInterface } from "../index";

const actions: ActionTree<FeedStateInterface, StateInterface> = {
    addFeedPost(context, feedData) {
        context.commit('addFeedPost', feedData);
    }
}

export default actions;
