import express, { Express, Request, Response } from 'express';
import { dbDrivers, db } from './db/db';

export const setupApp = (app: Express) => {
  app.use(express.json()); //middleware express.json() парсит JSON в теле запроса и добавляет его как объект в свойство body запроса (req.body.).

  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'HELLO MZF!'});
  });

  // Маршрут для очистки всех данных (для тестов)
  app.delete('/testing/all-data', (req: Request, res: Response) => {
    dbDrivers.drivers = [];
    db.videos = [];
    res.status(204).send();
  });

  return app;
};
