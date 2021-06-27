import connection from '../src/database.js';
import app from '../src/ServerApp.js';
import supertest from 'supertest';

beforeEach(async () => {
  await connection.query(`DELETE FROM transactions`);
});

describe("GET /transactions", () => {
    it("returns 200 for invalid params", async () => {
        const body = {}; // corpo inválido
        const result = await supertest(app).post("/transactions").send(body);
        const status = result.status;
        expect(status).toEqual(200);
    });
    return
});

afterAll(() => {
  connection.end();
});