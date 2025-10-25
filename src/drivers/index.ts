import {Router} from "express";
import {dbDrivers, DriverStatus, DriverType} from "../db/db";
import {getDriversController} from "./getDriversController";
import {getDriverController} from "./getDriverController";
import {createDriverController} from "./createDriverController";

export const driversRouter = Router()

driversRouter.get("/", getDriversController);

driversRouter.get("/:id", getDriverController);

driversRouter.post("/", createDriverController);

















