import connection from '../src/database.js';
import app from '../src/ServerApp.js';
import supertest from 'supertest';
import bcrypt from 'bcrypt'

const testUser = {
  name: 'Mateus Nobre',
  email: 'mateus@bootcamp.com.br',
  password: 'projeto_top',
  passwordHashed: bcrypt.hashSync('projeto_top', 10)
}

beforeEach(async () => {
  await connection.query(`DELETE FROM sessions`);
  await connection.query(`DELETE FROM clients`);
  await connection.query(`INSERT INTO clients (name, email, password, created_at)
          VALUES ('${testUser.name}', '${testUser.email}', '${testUser.passwordHashed}', NOW())`);       
});

describe("POST /login", () => {
    it("returns 201 and valid token for valid params", async () => {
        const body = {email: testUser.email, password: testUser.password};
        const result = await supertest(app).post("/login").send(body);
        const status = result.status
        const token = result.data
        const isValidToken = await connection.query(`
          SELECT *
          FROM sessions
          WHERE token='${token}'
        `)
        expect(status).toEqual(201);
        expect(isValidToken.rows.length).toEqual(1);
    });
    it("returns 404 and no data for email not found", async () => {
        const body = {email: 'somerandomemail@somerandomdomain.com', password: 'random'}; 
        const result = await supertest(app).post("/clients").send(body);
        expect(result.status).toEqual(404);
        expect(result.data).toEqual(undefined);
    });
    it("returns 401 and no data for wrong password", async () => {
        const body = {email: testUser.email, password: 'random'}; 
        const result = await supertest(app).post("/clients").send(body);
        expect(result.status).toEqual(401);
        expect(result.data).toEqual(undefined);
    });
    it("returns 400 and no data for empty params", async () => {
        const firstBody = {email: '', password: testUser.password};
        const secondBody = {email: testUser.email, password: ''}; 
        const thirdBody = {email: '', password: ''};
        
        const firstTry = await supertest(app).post("/clients").send(firstBody);
        expect(firstTry.status).toEqual(400); 
        expect(firstTry.data).toEqual(undefined);

        const secondTry = await supertest(app).post("/clients").send(secondBody);
        expect(secondTry.status).toEqual(400);
        expect(secondTry.data).toEqual(undefined);
        
        const thirdTry = await supertest(app).post("/clients").send(thirdBody);
        expect(thirdTry.status).toEqual(400);
        expect(thirdTry.data).toEqual(undefined);
    });
});

afterAll(() => {
  connection.end();
});