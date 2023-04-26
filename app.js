const express = require('express');

const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/apperror');
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

app.all('*', (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl} on the server`, 404));
});
app.use(globalErrorHandler);
module.exports = app;
