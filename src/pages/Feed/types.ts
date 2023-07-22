export interface IVideoSnippetThumbnails {
    default: {
        height: number;
        url: string;
        width: number;
    }
    high: {
        height: number;
        url: string;
        width: number;
    }
    medium: {
        height: number;
        url: string;
        width: number;
    }
}

export interface IVideoSnippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    thumbnails: IVideoSnippetThumbnails;
    title: string;
}

export interface IVideoDto {
    id: {
        kind: string;
        videoId: string;
        channelId: string;
    };
    kind: string;
    snippet: IVideoSnippet
    statistics: {
        viewCount: string;
        likeCount: string;
    }
}

export interface IVideos {
    items: IVideoDto[];
    kind: string;
    nextPageToken: string;
    pageInfo: {
        resultsPerPage: number;
        totalResults: number;
    }
    regionCode: string;
}