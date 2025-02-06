const { v4: uuidv4 } = require('uuid');
const queries = require('../db/queries');
const { getMessage } = require('../controllers/messagesController');
const { format } = require('date-fns');

const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', async (req, res) =>
  res.render('index', {
    title: 'Mini Message Board',
    messages: await queries.getAllMessages(),
  })
);

indexRouter.get('/message/:messageId', getMessage);

indexRouter.post('/new', async (req, res) => {
  const newMessage = req.body;
  await queries.insertMessage({
    name: newMessage.messageName,
    message: newMessage.messageText,
  });
  res.redirect('/');
});

module.exports = { indexRouter };
