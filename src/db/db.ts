

export type DBtype = {
    videos: Array<any>,
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
export const db: DBtype = {
    videos: [],
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

export const setDB = (dataset?: Partial<DBtype> ) => {
    if(!dataset) {
        db.videos = []
        return
    }
    db.videos = dataset.videos || db.videos
}
