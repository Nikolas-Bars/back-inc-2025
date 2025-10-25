import express from 'express';
import { setupApp } from './setup-app';
import {SETTINGS} from "./settings";
import {app} from "./app";
// создание приложения
setupApp(app);

// process — это глобальный объект в Node.js, который содержит информацию о текущем процессе выполнения.
// process.env — это объект, содержащий все переменные окружения, доступные вашему приложению.

// ф-ия listen - запускает сервер и начинает прослушивать входящие запросы на указанном порту.
app.listen(SETTINGS.PORT, () => {
  console.log(`Example app listening on port ${SETTINGS.PORT}`);
});
