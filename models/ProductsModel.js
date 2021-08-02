const mongoose = require('mongoose');

const ProductsModel = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please add a name'],
            maxlength: [1000]
        },
        c_id: {
            type: Number,
        },
        brand_name: {
            type: String,
            required: [true, 'Please add a name'],
            maxlength: [100]
        },
        image: {
            type: String,
            default: 'no-photo.jpg'
        },
        price: {
            type: String,
            required: true
        },
        discounted_price: {
            type: String,
            required: true
        }
    }, {
        versionKey: false,
        collection: 'products'
    }
);

module.exports = mongoose.model('products', ProductsModel);
