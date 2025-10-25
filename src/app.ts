import express from 'express'
import {SETTINGS} from "./settings";
import {setupApp} from "./setup-app";
import {videoRouter} from "./videos";
import {driversRouter} from "./drivers";

export const app = express();

// Настройка приложения через setupApp
setupApp(app);

// Подключение роутеров
app.use(SETTINGS.PATH.VIDEOS, videoRouter)
app.use('/drivers', driversRouter)
