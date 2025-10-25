import {Response, Request} from "express";
import {dbDrivers, DriverStatus, DriverType} from '../db/db'


export const createDriverController = (req: Request, res: Response<DriverType>) => {
    //1) проверяем приходящие данные на валидность
    //2) создаем newDriver
    const newDriver: DriverType = {
        id: dbDrivers.drivers.length ? dbDrivers.drivers[dbDrivers.drivers.length - 1].id + 1 : 1,
        status: DriverStatus.Online,
        createdAt: new Date(),
        ...req.body
    };
    //3) добавляем newDriver в БД
    dbDrivers.drivers.push(newDriver);
    //4) возвращаем ответ
    res.status(201).send(newDriver);
}
