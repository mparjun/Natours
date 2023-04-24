const express = require('express');

const morgan = require('morgan');
const tourrouter = require('./routes/tourroutes');
const userrouter = require('./routes/userroutes');

const app = express();

// middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use('/api/v1/tours', tourrouter);
app.use('/api/v1/users', userrouter);

module.exports = app;
