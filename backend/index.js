const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/reactions', async (req, res) => {
  const [rows] = await pool.query('SELECT emoji, count FROM reactions');
  res.json(rows);
});

app.post('/react', async (req, res) => {
  const { emoji } = req.body;
  await pool.query(`
    INSERT INTO reactions (emoji, count)
    VALUES (?, 1)
    ON DUPLICATE KEY UPDATE count = count + 1
  `, [emoji]);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('Server running on port 3000'));