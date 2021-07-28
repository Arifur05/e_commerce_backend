const express = require('express');

const app = express();
const morgan = require('morgan');

const categoriesRoute = require('./api/routes/categories');
const productRoute = require('./api/routes/products');

app.use(morgan('dev'));
app.use('/categories', categoriesRoute);
app.use('/products', productRoute);

module.exports = app;
