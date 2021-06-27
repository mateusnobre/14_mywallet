import connection from '../src/database.js';
import app from '../src/ServerApp.js';
import supertest from 'supertest';

beforeEach(async () => {
  await connection.query(`DELETE FROM clients`);
});

describe("POST /sign-up", () => {
    it("returns 201 for valid params", async () => {
        const body = {name: 'Mateus Nobre', email: 'mateus@bootcamp.com.br', password: 'projeto_top'}; // corpo inválido
        const result = await supertest(app).post("/sign-up").send(body);
        const status = result.status;
        expect(status).toEqual(201);
    });
    return
});
afterAll(() => {
  connection.end();
});