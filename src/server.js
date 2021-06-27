import bcrypt from 'bcrypt';
import express from 'express';
import cors from 'cors';
import Joi from 'joi';
import pg from 'pg';
import { v4 as uuid } from 'uuid';

const { Pool } = pg;

const user = 'postgres';
const password = 'h4ck3rismo';
const host = 'localhost';
const port = 5432;
const database = 'mywallet';

const connection = new Pool({
  user,
  password,
  host,
  port,
  database
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/sign-up", async (req, res) => {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query(`
        INSERT INTO users
        (name, email, password)
        VALUES ($1, $2, $3)
    `,[name, email, passwordHash]);

    res.sendStatus(201);
});

app.post("/sign-in", async (req, res) => {
    const { email, password } = req.body;
    
    const result = await connection.query(`
        SELECT * FROM users
        WHERE email = $1
    `,[email]);

    const user = result.rows[0];

    if(user && bcrypt.compareSync(password, user.password)) {
        // sucesso, usuário encontrado com este email e senha!
        const token = uuid.v4();
        
        await connection.query(`
          INSERT INTO sessions ("userId", token, created_at)
          VALUES ($1, $2, NOW())
        `, [user.id, token]);

        res.send(token);
    } else {
        // usuário não encontrado (email ou senha incorretos)
    }
});