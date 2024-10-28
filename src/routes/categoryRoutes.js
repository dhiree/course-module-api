const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const subCategoryController = require('../controller/subCategoryController');

// Category Routes
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.get('/categories/:id', categoryController.getCategoryById);
router.get('/categories', categoryController.getAllCategories);

// SubCategory Routes
router.post('/subcategories', subCategoryController.createSubCategory);
router.put('/subcategories/:id', subCategoryController.updateSubCategory);
router.get('/subcategories/:id', subCategoryController.getSubCategoryById);
router.get('/subcategories', subCategoryController.getAllSubCategories);

module.exports = router;
