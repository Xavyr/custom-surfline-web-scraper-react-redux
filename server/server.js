'use strict';

const express = require('express');
const app = express();
const scraperController = require('./scraper');
const cors = require('cors');

app.use(cors());

// first sample route
app.get('/beaches/*', scraperController.getData);

app.get('/all', scraperController.getAllData);


app.listen(3005);

module.exports = app;
