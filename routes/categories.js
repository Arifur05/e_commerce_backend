const express = require('express');
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
