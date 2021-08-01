const mongoose = require('mongoose');

const CategoriesSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please add a name'],
            maxlength: [500]
        },
        slug: String,
        category_id: {
            type: Number,
            required: true,
        },

    },
    {
        collection: 'categories',
        versionKey: false
    });

module.exports = mongoose.model('categories', CategoriesSchema);
