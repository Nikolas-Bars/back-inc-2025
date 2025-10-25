import {Response, Request} from "express";
import {db, VideoType} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'


export const getVideoController = (req: Request, res: Response<VideoType>) => {
    const response = db.videos.find((v) => +req.params.id === v.id) as VideoType
    res.status(200).json(response)
}
