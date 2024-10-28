const mongoose = require('mongoose');

const SubCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});

const SubCategory = mongoose.model('SubCategory', SubCategorySchema);
module.exports = SubCategory;
