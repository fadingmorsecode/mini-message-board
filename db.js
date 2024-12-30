const { v4: uuidv4 } = require('uuid');

const messages = [
  {
    id: uuidv4(),
    text: 'It seems alright, Jim.',
    name: 'George',
    added: new Date(),
  },
  {
    id: uuidv4(),
    text: 'Not a fan',
    name: 'Paul',
    added: new Date(),
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => {
    return (message.id = messageId);
  });
}

async function createMessage(message) {
  messages.push({
    id: message.id,
    text: message.text,
    name: message.name,
    added: message.added,
  });
}

async function getMessages() {
  return messages;
}

module.exports = { getMessageById, getMessages, createMessage };
