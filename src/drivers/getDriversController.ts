import {Response, Request} from "express";
import {dbDrivers} from '../db/db'
import {OutputVideoType} from '../input-output-types/video-types'


export const getDriversController = (req: Request, res: Response) => {
    res.status(200).send(dbDrivers.drivers);
}
