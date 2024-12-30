const db = require('../db');

async function getMessage(req, res) {
  const { messageId } = req.params;
  console.log(messageId);
  console.log(db.getMessages());
  const message = await db.getMessageById(messageId);
  console.log('the message in question');
  console.log(message);
  console.log(await db.getMessages());
  console.log(message);
  res.render('details', { message: message });
}

module.exports = { getMessage };
