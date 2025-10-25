import {Router} from "express";
import {getVideosController} from "./getVideosController";

export const videoRouter = Router()

videoRouter.get("/", getVideosController)
