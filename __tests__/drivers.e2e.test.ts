import request from 'supertest';
import { app } from '../src/app';

// Типы для теста
interface DriverInputDto {
  name: string;
  phoneNumber: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  vehicleLicensePlate: string;
  vehicleDescription: string | null;
  vehicleFeatures: string[];
}

const HttpStatus = {
  NoContent: 204,
};

describe('Driver API', () => {
  const testDriverData: DriverInputDto = {
    name: 'Valentin',
    phoneNumber: '123-456-7890',
    email: 'valentin@example.com',
    vehicleMake: 'BMW',
    vehicleModel: 'X5',
    vehicleYear: 2021,
    vehicleLicensePlate: 'ABC-123',
    vehicleDescription: null,
    vehicleFeatures: [],
  };

  beforeAll(async () => {
    await request(app).delete('/testing/all-data').expect(HttpStatus.NoContent);
  });

  it('should create driver; POST /drivers', async () => {
    const newDriver: DriverInputDto = {
      ...testDriverData,
      name: 'Valentin',
      phoneNumber: '123-456-7890',
      email: 'valentin@example.com',
    };

    await request(app).post('/drivers').send(newDriver).expect(201);
  });

  it('should return drivers list; GET /drivers', async () => {
    await request(app)
      .post('/drivers')
      .send({ ...testDriverData, name: 'Another Driver' })
      .expect(201);

    await request(app)
      .post('/drivers')
      .send({ ...testDriverData, name: 'Another Driver2' })
      .expect(201);

    const driverListResponse = await request(app).get('/drivers').expect(200);

    expect(driverListResponse.body).toBeInstanceOf(Array);
    expect(driverListResponse.body.length).toBeGreaterThanOrEqual(2);
  });

  it('should return driver by id; GET /drivers/:id', async () => {
    const createResponse = await request(app)
      .post('/drivers')
      .send({ ...testDriverData, name: 'Another Driver' })
      .expect(201);

    const getResponse = await request(app)
      .get(`/drivers/${createResponse.body.id}`)
      .expect(200);

    expect(getResponse.body).toEqual({
      ...createResponse.body,
      id: expect.any(Number),
      createdAt: expect.any(String),
    });
  });
});
