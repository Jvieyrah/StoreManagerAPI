const express = require('express');
// const router = express.Router();
const productController = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.findByID);
productRoute.post('/', validateProduct.productValidator, productController.create);
productRoute.put('/:id', validateProduct.productValidator, productController.update);

module.exports = productRoute;
