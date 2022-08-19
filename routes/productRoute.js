const express = require('express');
const productController = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.findByID);
productRoute.post('/', validateProduct.productValidator, productController.create);
productRoute.put('/:id', validateProduct.productValidator, productController.update);
productRoute.delete('/:id', productController.destroy);
productRoute.get('/search', productController.search);

module.exports = productRoute;
