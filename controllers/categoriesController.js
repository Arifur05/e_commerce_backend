const Categories= require('../models/CategoriesModel');
/*@desc Get all Categories
*@route GET /api/v1/categories
*/
//console.log(Categories);
exports.getCategories=async (request,response, next)=>{

    try {
        const categoriesList= await Categories.find();
        console.log('log: '+response.body);
        response.status(200).json({
            success: true,
            data: categoriesList
        });
    }
    catch (err){
        response.status(400).json({
            success: false
        });
    }
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
exports.postCategoriesProduct= async (request,response, next)=>{
    const categoriesData= await Categories.create(request.body);
    try {
        response.status(200).json({
            success: true,
            data: categoriesData
        });
    }
    catch (e) {
        response.status(400).json({
            success:false,
            data: 'Data couldnt updated'
        })
    }
}


/*@desc UPDATE Categories
*@route PUT /api/v1/categories/id
*/
exports.updateProductCategories=async (request,response, next)=>{
    const categories= await Categories.findByIdAndUpdate(
        request.params.id, request.body,{
            new: true,
            runValidators:true
        });
    if (!categories){
        return response.status(400).json({
            success: 'false'
        });
    }

    response.status(200).json({
        success:true,
        data: categories
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
