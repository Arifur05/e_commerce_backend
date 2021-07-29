const express = require('express');
const dotenv = require('dotenv');
const {
    getCategories,
    getCategoryProduct,
    updateProductCategories,
    postCategoriesProduct,
    deleteProductCategories
} = require('../controllers/categoriesController');
const router = express.Router();

router.route('/').get(getCategories).get(getCategoryProduct).put(updateProductCategories).post(postCategoriesProduct).delete(deleteProductCategories);


module.exports = router;
