const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

//routers
const categories = require('./routes/categories');
const products = require('./routes/products');

//connect to Database
connectDB();

//environment variables
dotenv.config({path: './config/config.env'});

const app = express();

//Dev logging middleware
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/categories', categories);
app.use('/api/v1/products', products);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log('Server running in ' + process.env.NODE_ENV.green + ' mode on port ' + PORT.green));










