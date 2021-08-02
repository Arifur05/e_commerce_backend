const express = require('express');
const dotenv = require('dotenv');
const {
    getProducts,
    updateProducts,
    postProducts,
    deleteProducts
} = require('../controllers/productController');
const router = express.Router();

router.route('/').get(getProducts)
    .put(updateProducts)
    .post(postProducts)
    .delete(deleteProducts);



module.exports= router;
