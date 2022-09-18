export interface FeedPostStateInterface {
    id: number,
    created: Date,
    author: string,
    image: string,
    plantName: string,
    location: string,
    description: string,
}

export interface FeedStateInterface {
    feed: Array<FeedPostStateInterface>,
}
