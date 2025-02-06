const pool = require('./pool');
const formattedDate = require('./currentDate');

async function getMessageById(id) {
  console.log(id);
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0];
}

async function getAllMessages() {
  const res = await pool.query('SELECT * FROM messages');
  const rows = res.rows;
  return rows;
}

async function insertMessage(message) {
  await pool.query(
    'INSERT INTO messages (name, message, date) VALUES ($1, $2, $3)',
    [message.name, message.message, formattedDate]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
