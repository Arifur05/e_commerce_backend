const Products= require('../models/ProductsModel');
const Categories = require("../models/CategoriesModel");
/*@desc Get all Categories
*@route GET /api/v1/categories
*/
//console.log(Categories);
exports.getProducts=async (request,response, next)=>{

    try {
        const productList= await Products.find();
        console.log('log: '+response.body);
        response.status(200).json({
            success: true,
            data: productList
        });
    }
    catch (err){
        response.status(400).json({
            success: false
        });
    }
}





/*@desc Post product in Category
*@route POST /api/v1/categories
*/
exports.postProducts= async (request,response, next)=>{
    const productData= await Products.create(request.body);
    try {
        response.status(200).json({
            success: true,
            data: productData
        });
    }
    catch (e) {
        response.status(400).json({
            success:false,
            //data: 'No Products'
        })
    }
}


/*@desc UPDATE Categories
*@route PUT /api/v1/categories/id
*/
exports.updateProducts= async (request,response, next)=>{
    try {
        const productData= await Products.findByIdAndUpdate(
            request.params.id, request.body,{
                new: true,
                runValidators:true
            });
        console.log(request.body);

        if (!productData){
            return response.status(400).json({
                success: 'false'
            },console.log(`Product not found with id of ${request.params.id}`, 404));
        }

        response.status(200).json({
            success:true,
            data: productData
        });
    }
    catch (e) {
        response.status(400).json({
            success: 'false'});
    }
}

/*@desc DELETE Categories
*@route DELETE /api/v1/categories/id
*/
exports.deleteProducts= async (request,response, next)=>{
    try {
        const products= await Products.findByIdAndUpdate(request.params.id);
        console.log(request.body);

        if (!products){
            return response.status(400).json({
                success: 'false'
            },console.log(`Product not found with id of ${request.params.id}`, 404));
        }

        response.status(200).json({
            success:true,
            message: 'Product deleted successfully!'
        });
    }
    catch (e) {
        response.status(400).json({
            success: 'false'});
    }
}
