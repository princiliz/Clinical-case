const request = require('supertest');
const app = require('../app');
const db = require('../models');

describe('Clinical Cases API', () => {
  beforeAll(async () => {
    await db.sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await db.sequelize.close();
  });

  it('should create a new clinical case', async () => {
    const response = await request(app)
      .post('/cases')
      .send({ age: 30, gender: 'Masculin', consultationReason: 'Douleurs abdominales' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should retrieve clinical cases', async () => {
    const response = await request(app).get('/cases');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});