const { v4: uuidv4 } = require('uuid');
const db = require('../db');

const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', async (req, res) =>
  res.render('index', {
    title: 'Mini Message Board',
    messages: await db.getMessages(),
    newMessageLink: {
      name: 'New Message',
      href: '/new',
    },
  })
);

// indexRouter.get('/:messageId', getMessage);

indexRouter.post('/new', (req, res) => {
  const newMessage = req.body;
  db.createMessage({
    id: uuidv4(),
    text: newMessage['messageText'],
    name: newMessage['messageName'],
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = { indexRouter };
