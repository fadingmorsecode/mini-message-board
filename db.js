const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const messages = [
  {
    id: uuidv4(),
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    name: 'George',
    added: format(new Date(), 'PP'),
  },
  {
    id: uuidv4(),
    text: 'I swear I can speak a language other than lorem ipsum.',
    name: 'Paul',
    added: format(new Date(), 'PP'),
  },
];

async function getMessageById(messageId) {
  return messages.find((message) => messageId === message.id);
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
