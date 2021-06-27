import connection from '../src/database.js';

beforeEach(async () => {
  await connection.query(`DELETE FROM clients`);
});

afterAll(() => {
  connection.end();
});