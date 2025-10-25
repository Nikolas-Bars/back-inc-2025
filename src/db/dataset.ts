import {DBVideotype, VideoType} from "./db";

export const video1: VideoType = {
    id: 2,
    title: 'video2',
    author: 'Lo2',
    canBeDownloaded: true,
    minAgeRestriction: true,
    createdAt: '11.09.2000 16:53:00',
    publicationDate: '11.09.2000 16:53:00',
    availableResolutions: ['p144']
}

export const dataset: DBVideotype = {
    videos: [video1],
}
