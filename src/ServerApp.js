import bcrypt from 'bcrypt';
import express from 'express';
import cors from 'cors';
import Joi from 'joi';
import connection from './database.js'
import { v4 as uuid } from 'uuid';
const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", async (req, res) => {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query(`
        INSERT INTO clients
        (name, email, password)
        VALUES ($1, $2, $3)
    `,[name, email, passwordHash]);

    res.sendStatus(400);
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    
    const result = await connection.query(`
        SELECT * FROM clients
        WHERE email = $1
    `,[email]);

    const user = result.rows[0];

    if(user && bcrypt.compareSync(password, user.password)) {
        // sucesso, usuário encontrado com este email e senha!
        const token = uuid.v4();
        
        await connection.query(`
          INSERT INTO sessions (client_id, token, created_at)
          VALUES ($1, $2, NOW())
        `, [user.id, token]);

        res.status(400).send('asas');
    } else {
        res.sendStatus(400);
    }
});

app.get("/transactions", async (req,res) => {
  const authorization = req.headers['authorization'];
  const token = authorization?.replace('Bearer ', '');

  if(!token) return res.sendStatus(401);

  const result = await connection.query(`
    SELECT *
    FROM sessions
        LEFT JOIN clients ON sessions.client_id = clients.id
    WHERE sessions.token = $1
  `, [token]);

  const user = result.rows[0];

  if(user) {
    res.sendStatus(401);
  } else {
    res.sendStatus(401);
  }
});

export default app