import { MutationTree } from "vuex";

import { FeedStateInterface } from "./models";


const mutations: MutationTree<FeedStateInterface> = {
    addFeedPost(state, feedData) {
        const newFeedPost = {
            id: feedData.id,
            created: new Date(),
            author: feedData.author,
            image: feedData.image,
            plantName: feedData.plantName,
            location: feedData.location,
            description: feedData.description,
        };

        state.feed.unshift(newFeedPost);
    }
}

export default mutations;
