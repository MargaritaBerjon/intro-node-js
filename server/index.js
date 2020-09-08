//import express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// configuring express
const app = express();

// enable pug
app.set('view engine', 'pug');

//add views
app.set('views', path.join(__dirname, './views'));

//load the public static folder
app.use(express.static('public'));

//load routes
app.use('/', routes());

app.listen(3000);