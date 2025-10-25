import {Router} from "express";
import {createVideoController} from './createVideoController'
import {getVideosController} from "./getVideosController";
import {getVideoController} from "./getVideoController";
import {putVideoController} from "./putVideoController";

export const videoRouter = Router()

videoRouter.get("/", getVideosController)
videoRouter.post("/", createVideoController)
videoRouter.get("/:id", getVideoController)
videoRouter.put("/:id", putVideoController)
