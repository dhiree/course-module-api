const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }],
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: true,
    }],
});

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
