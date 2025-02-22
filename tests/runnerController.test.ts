// tests/runnerController.test.ts
import request from 'supertest';
import app from '../src/app'; // Assuming app.ts initializes Express
import { server } from '../src/server';

describe('Runner Controller', () => {
  let testServer: any;

  beforeAll((done) => {
    testServer = server;
    done();
  });

  afterAll((done) => {
    testServer.close(done);
  });

  it('GET /runners should return a list of runners', async () => {
    const response = await request(app).get('/api/runners');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});



