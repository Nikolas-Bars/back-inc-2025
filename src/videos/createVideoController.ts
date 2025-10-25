import {Response, Request} from "express";
import {db, DriverType, VideoType} from '../db/db'


export const createVideoController = (req: Request, res: Response<VideoType>) => {
    //1) проверяем приходящие данные на валидность
    //2) создаем newVideo
    const newVideo: VideoType = {
        id: db.videos.length ? db.videos[db.videos.length - 1].id + 1 : 1,
        createdAt: new Date(),
        ...req.body
    };
    //3) добавляем newDriver в БД
    db.videos.push(newVideo);
    //4) возвращаем ответ
    res.status(201).send(newVideo);
}
