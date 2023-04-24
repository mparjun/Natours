const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://arjun:passwordarjun@cluster0.smpnklh.mongodb.net/natours'
  )
  .then(() => {
    console.log('db connection successful');
  });

const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log('app running');
});
