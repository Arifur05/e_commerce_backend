const Products= require('../models/ProductsModel');
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
exports.updateProducts= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: 'UPDATE Products'
    });
}

/*@desc DELETE Categories
*@route DELETE /api/v1/categories/id
*/
exports.deleteProducts= (request,response, next)=>{
    response.status(200).json({
        success:true,
        message: ' DELETE Products'
    });
}
