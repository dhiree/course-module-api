const Category = require('../models/Category');

class CategoryService {
    async createCategory(name) {
        const category = new Category({ name });
        return await category.save();
    }

    async updateCategory(id, name) {
        return await Category.findByIdAndUpdate(id, { name }, { new: true });
    }

    async getCategoryById(id) {
        return await Category.findById(id).populate('subCategories');
    }

    getAllCategories = async (req, res) => {
        try {
            const categoriesWithSubCategoryCount = await Category.aggregate([
                {
                    $lookup: {
                        from: 'subcategories',
                        localField: '_id',
                        foreignField: 'category',
                        as: 'subCategories'
                    }
                },
                {
                    $project: {
                        name: 1,
                        subCategoryCount: { $size: '$subCategories' }
                    }
                }
            ]);

            return categoriesWithSubCategoryCount
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    };
}

module.exports = new CategoryService();
