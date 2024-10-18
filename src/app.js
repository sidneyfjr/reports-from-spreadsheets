const express       = require('express');
const bodyParser    = require('body-parser');
const routes        = require('./routes/index');
require('dotenv').config();
const app           = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/congregacao/api/v1', routes);


module.exports = app;