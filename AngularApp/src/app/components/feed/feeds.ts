export interface Feeds {
    title: string;
    description: string;
    items: [{
        author: string,
        link: string,
        media: {
            m: string
        },
        tags
    }]
}

export interface FeedWrapper {
    data: Feeds;
    statusCode: number,
    msg: string
}