'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const router = express.Router();

//Conexão ao MONGO
// mongodb+srv://<username>:<password>@db-project-cadvq.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect(
    'mongodb+srv://angelo-rocha:YaADb0dNJOsiu3ap@db-project-cadvq.gcp.mongodb.net/project?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true,useFindAndModify: false  })
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log('DB connection Error ' + err)
    });


// Carrega as models
const Product = require('./models/product');
const Costumer = require('./models/customer');
const Order = require('./models/order');

// Carrega as rotas  
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;