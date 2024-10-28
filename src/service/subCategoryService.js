const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

class SubCategoryService {
    async createSubCategory(name, categoryId) {
        const subCategory = new SubCategory({ name, category: categoryId });
        await subCategory.save();
        await Category.findByIdAndUpdate(categoryId, { $push: { subCategories: subCategory._id } });
        return subCategory;
    }

    async updateSubCategory(id, name) {
        return await SubCategory.findByIdAndUpdate(id, { name }, { new: true });
    }

    async getSubCategoryById(id) {
        return await SubCategory.findById(id);
    }

    async getAllSubCategories() {
        return await SubCategory.find().populate('category');
    }
}

module.exports = new SubCategoryService();
