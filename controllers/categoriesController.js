
/*@desc Get all Categories
*@route GET /api/v1/categories
*/
exports.getCategories= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: 'Get Categories'
    });
}


/*@desc Get single Category Product
*@route GET /api/v1/categories/{id}
*/
exports.getCategoryProduct= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: 'Get single Category'
    });
}


/*@desc Post product in Category
*@route POST /api/v1/categories
*/
exports.postCategoriesProduct= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: 'Post product in Category'
    });
}


/*@desc UPDATE Categories
*@route PUT /api/v1/categories/id
*/
exports.updateProductCategories= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: 'UPDATE Categories'
    });
}

/*@desc DELETE Categories
*@route DELETE /api/v1/categories/id
*/
exports.deleteProductCategories= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: ' DELETE Categories'
    });
}
