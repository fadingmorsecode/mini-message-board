const express = require('express');
const path = require('node:path');
const { indexRouter } = require('./routers/indexRouter');
const messageRouter = require('./routers/messageRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', messageRouter);

const PORT = 999;
app.listen(PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
