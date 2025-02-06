const { v4: uuidv4 } = require('uuid');
const db = require('../db/db');
const { getMessage } = require('../controllers/messagesController');
const { format } = require('date-fns');

const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', async (req, res) =>
  res.render('index', {
    title: 'Mini Message Board',
    messages: await db.getMessages(),
  })
);

indexRouter.get('/message/:messageId', getMessage);

indexRouter.post('/new', async (req, res) => {
  const newMessage = req.body;
  await db.createMessage({
    id: uuidv4(),
    text: newMessage.messageText,
    name: newMessage.messageName,
    added: format(new Date(), 'PP'),
  });
  res.redirect('/');
});

module.exports = { indexRouter };
