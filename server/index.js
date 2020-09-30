//import express
const express = require('express');
const path = require('path');
const routes = require('./routes');


const configs = require('./config');

const db = require('./config/database');

db.authenticate()
  .then(() => console.log('DB Conectada'))
  .catch(error => console.log(error));

// configuring express
const app = express();

// enable pug
app.set('view engine', 'pug');

//add views
app.set('views', path.join(__dirname, './views'));

//load the public static folder
app.use(express.static('public'));

//check if development or production
const config = configs[app.get('env')];

//create variable for web site
app.locals.title = config.siteName;

//show current year
app.use((req, res, next) => {

  //Create new date
  const date = new Date();
  res.locals.currentDate = date.getFullYear();
  return next();
})


//load routes
app.use('/', routes());

app.listen(3000);