import { createStore } from 'vuex';

import feedModule from './modules';
import { FeedStateInterface } from './modules/models';


export interface StateInterface {
    feed: FeedStateInterface
}

export default createStore<StateInterface>({
    modules: {
        feed: feedModule,
    }
})
