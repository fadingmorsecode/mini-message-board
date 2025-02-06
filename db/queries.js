const pool = require('./pool');

async function getMessage() {
  const { rows } = await pool.query('');
}

async function createMessage(obj) {
  const { name, message } = obj;
  await pool.query('INSERT INTO messages (name, message) VALUES ($1)', [
    name,
    message,
  ]);
}

async function getAllMessages() {
  const res = await pool.query('SELECT * FROM messages');
  const rows = res.rows;
  console.log(rows);
  return rows;
}

module.exports = { createMessage, getAllMessages };
