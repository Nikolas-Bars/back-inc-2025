import {Response, Request} from "express";
import {dbDrivers, DriverType} from '../db/db'


export const getDriver = (req: Request, res: Response<DriverType | { message: string }>) => {
    // ищем водителя в бд по id
    const driver = dbDrivers.drivers.find((d) => d.id === +req.params.id);
    if (!driver) {
        res.status(404).send({ message: "Driver not found" });
        return;
    }
    // возвращаем ответ
    res.status(200).send(driver);
}
