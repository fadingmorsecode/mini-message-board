const { v4: uuidv4 } = require('uuid');

const messages = [
  {
    id: uuidv4(),
    text: 'It seems alright, Jim.',
    user: 'George',
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: 'Not a fan',
    user: 'Paul',
    added: new Date(),
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => (message.id = messageId));
}

function createMessage(message) {
  messages.push({
    id: message.id,
    message: message.text,
    user: message.name,
    added: message.added,
  });
}

async function getMessages() {
  return messages;
}

module.exports = { getMessages };
