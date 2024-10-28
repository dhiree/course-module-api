const SubCategoryService = require('../service/subCategoryService');

class SubCategoryController {
    async createSubCategory(req, res) {
        try {
            const { name, categoryId } = req.body;
            const subCategory = await SubCategoryService.createSubCategory(name, categoryId);
            res.status(201).json(subCategory);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateSubCategory(req, res) {
        try {
            const { name } = req.body;
            const subCategory = await SubCategoryService.updateSubCategory(req.params.id, name);
            if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
            res.json(subCategory);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getSubCategoryById(req, res) {
        try {
            const subCategory = await SubCategoryService.getSubCategoryById(req.params.id);
            if (!subCategory) return res.status(404).json({ error: 'SubCategory not found' });
            res.json(subCategory);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllSubCategories(req, res) {
        try {
            const subCategories = await SubCategoryService.getAllSubCategories();
            res.json(subCategories);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new SubCategoryController();
