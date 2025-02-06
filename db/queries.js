const pool = require('./pool');

async function getMessageById(id) {
  console.log(id);
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
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
  return rows;
}

module.exports = { createMessage, getAllMessages, getMessageById };
