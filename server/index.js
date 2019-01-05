const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const faker = require('faker');
const database = require('../database/index.js');




// server setup
const app = express();
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(process.env.PORT || 1234, () => {
  console.log('Your server is running');
});


