import connection from '../src/database.js';
import app from '../src/app.js';
import supertest from 'supertest';

beforeEach(async () => {
  await connection.query(`DELETE FROM transactions`);
});

describe("GET /transactions", async () => {
    it("returns 400 for invalid params", () => {
        const body = {}; // corpo inválido
        const result = await supertest(app).post("/receitas").send(body);
        const status = result.status;
        expect(status).toEqual(400);
    });
    it("returns 409 for duplicated title", () => {
        const body = { titulo: 'Receita', ingredientes: '...', preparo: '...' };
        
        const firstTry = await supertest(app).post("/receitas").send(body);
        expect(firstTry.status).toEqual(201); // a primeira inserção vai funcionar

        // se tentarmos criar um post igual, deve retornar 409
        const secondTry = await supertest(app).post("/receitas").send(body);
        expect(secondTry.status).toEqual(409);
    });
});

afterAll(() => {
  connection.end();
});