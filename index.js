const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/restapis', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(5000);