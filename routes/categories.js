const express = require('express');
const dotenv = require('dotenv');
const {
    getCategories,
    getCategoryProduct,
    updateCategoriesData,
    postCategoriesProduct,
    deleteProductCategories,
} = require('../controllers/categoriesController');
const router = express.Router();

router.route('/').get(getCategories).post(postCategoriesProduct);
router.route('/:id').get(getCategoryProduct).put(updateCategoriesData).delete(deleteProductCategories);


module.exports = router;
