import {Response, Request} from "express";
import {db, VideoType} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'


export const putVideoController = (req: Request, res: Response<VideoType>) => {
    const videoIndex = db.videos.findIndex((v) => v.id === +req.params.id)
    
    if (videoIndex === -1) {
        res.status(404).json({} as VideoType)
        return
    }
    
    // Обновляем только те поля, которые пришли в запросе
    db.videos[videoIndex] = {
        ...db.videos[videoIndex],
        ...req.body
    }
    
    res.status(200).json(db.videos[videoIndex])
}
