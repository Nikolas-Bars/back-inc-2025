
export type VideoType = {
    "id": number,
    "title": string,
    "author": string,
    "canBeDownloaded": boolean,
    "minAgeRestriction": boolean,
    "createdAt": string,
    "publicationDate": string,
    "availableResolutions": string[]
}
export type DBVideotype = {
    videos: Array<VideoType>,
}
export type DriverType = {
    id: number,
    name: string,
    age: number,
    status: number,
    createdAt: Date,
}
export const DriverStatus = {
    Online: 1,
    Offline: 2,
}
export const db: DBVideotype = {
    videos: [{
        id: 1,
        title: 'video1',
        author: 'Loh',
        canBeDownloaded: false,
        minAgeRestriction: false,
        createdAt: '20.09.2024 16:53:00',
        publicationDate: '20.09.2024 16:53:00',
        availableResolutions: ['p144']
    }],
}

export type DriversDBType = {
    drivers: Array<DriverType>,
}

export const dbDrivers: DriversDBType = {
    drivers: [{
        id: 1,
        name: 'Vasya',
        age: 20,
        status: 2,
        createdAt: new Date()
    }]
}

export const setVideoDB = (dataset: DBVideotype ) => {
    if(!dataset) {
        db.videos = []
        return
    }
    db.videos = [...db.videos, ...dataset.videos]
}
