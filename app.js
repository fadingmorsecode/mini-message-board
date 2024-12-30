const express = require('express');
const path = require('node:path');
const { indexRouter } = require('./routers/indexRouter');
const messageRouter = require('./routers/messageRouter');
const app = express();
const assetsPath = path.join(__dirname, 'public');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/new', messageRouter);
app.use(express.static(assetsPath));

const PORT = 999;
app.listen(PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
