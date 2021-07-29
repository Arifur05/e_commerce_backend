const express = require('express');
const {
    getCategories,
    getCategoryProduct,
    updateProductCategories,
    postCategoriesProduct,
    deleteProductCategories
} = require('../controllers/categoriesController')
const router = express.Router();


module.exports = router;
