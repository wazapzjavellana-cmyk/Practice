const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from backend heheheh !');
});

// Example API route
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Berny' }, { id: 2, name: 'Alex' }]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'practice_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Database connected!');
});
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
