const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use('/api', referralRoutes);
app.use(errorHandler);

module.exports = app;
