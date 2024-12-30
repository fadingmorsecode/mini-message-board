const messages = [
  {
    text: 'It seems alright, Jim.',
    user: 'George',
    added: new Date(),
  },
  {
    text: 'Not a fan',
    user: 'Paul',
    added: new Date(),
  },
];

const { Router } = require('express');

const indexRouter = Router();

indexRouter.get('/', (req, res) =>
  res.render('index', {
    title: 'Mini Message Board',
    messages: messages,
    newMessageLink: {
      name: 'New Message',
      href: '/new',
    },
  })
);
indexRouter.post('/new', (req, res) => {
  const newMessage = req.body;
  messages.push({
    text: newMessage['messageText'],
    name: newMessage['messageName'],
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = indexRouter;
