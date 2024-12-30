const db = require('../db');

async function getMessage(req, res) {
  const { messageId } = req.params;
  console.log(`Message ID Request: ${messageId}`);
  const message = await db.getMessageById(messageId);
  console.log(message);
  res.render('details', { message: message });
}

module.exports = { getMessage };
