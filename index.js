const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const app = express();

app.use('/', routes());

app.listen(5000);