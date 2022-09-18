import { GetterTree } from "vuex";

import { FeedStateInterface } from "./models";
import { StateInterface } from "../index";


const getters: GetterTree<FeedStateInterface, StateInterface> = {
    getFeed(state) {
        return state.feed;
    },
    getFeedPost(state) {
        return (feedId: number) => {
            return state.feed.find((feedPost) => feedPost.id === feedId);
        };
    },
}

export default getters;
