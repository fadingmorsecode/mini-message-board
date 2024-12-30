const db = require('../db');

async function getMessage(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageById(messageId);
  res.render('details', { message: message });
}

module.exports = { getMessage };
