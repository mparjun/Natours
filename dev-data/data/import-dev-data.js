const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Tour = require('../../models/tourmodels');

dotenv.config({ path: './config.env' });

mongoose
  .connect(
    'mongodb+srv://arjun:passwordarjun@cluster0.smpnklh.mongodb.net/natours'
  )
  .then(() => {
    console.log('db connection successful');
  });

const tours = JSON.parse(fs.readFileSync('tours-simple.json', 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('data is loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('data deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

console.log(process.argv);

deleteData();
importData();
