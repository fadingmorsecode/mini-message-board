const queries = require('../db/queries');

async function getMessage(req, res) {
  const { messageId } = req.params;
  console.log(`Message ID Request: ${messageId}`);
  const message = await queries.getMessageById(messageId);
  console.log(message);
  res.render('details', { message: message });
}

module.exports = { getMessage };
