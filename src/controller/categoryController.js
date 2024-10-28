const CategoryService = require('../service/categoryService');

class CategoryController {
    async createCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await CategoryService.createCategory(name);
            res.status(201).json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateCategory(req, res) {
        try {
            const { name } = req.body;
            const category = await CategoryService.updateCategory(req.params.id, name);
            if (!category) return res.status(404).json({ error: 'Category not found' });
            res.json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getCategoryById(req, res) {
        try {
            const category = await CategoryService.getCategoryById(req.params.id);
            if (!category) return res.status(404).json({ error: 'Category not found' });
            res.json(category);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllCategories(req, res) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.json(categories);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new CategoryController();
