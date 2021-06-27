import connection from '../src/database.js';
import app from '../src/ServerApp.js';
import supertest from 'supertest';

beforeEach(async () => {
  await connection.query(`DELETE FROM clients`);
});

describe("POST /login", () => {
    it("returns 201 for valid params", async () => {
        const body = {email: 'mateus@bootcamp.com.br', password: 'projeto_top'}; // corpo válido
        const result = await supertest(app).post("/login").send(body);
        const status = result.status;
        expect(status).toEqual(201);
    });
});

afterAll(() => {
  connection.end();
});