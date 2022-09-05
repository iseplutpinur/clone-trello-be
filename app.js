const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const todosRouter = require('./app/api/todos/router');
const itemsRouter = require('./app/api/items/router');

const app = express();

const URL = '/api/v1';

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.json({
    message: 'wellcome to api trello',
    version: '1.0'
  });
});
app.use(`${URL}/todos`, todosRouter);
app.use(`${URL}/items`, itemsRouter);

app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.err = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({ message: err.message });
})

module.exports = app;
