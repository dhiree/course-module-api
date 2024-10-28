const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
    }],
});

const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;
