const express = require('express');
const path = require('node:path');
const indexRouter = require('./routers/indexRouter');
const app = express();

app.use('/', indexRouter);

const PORT = 999;
app.listen(PORT);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
