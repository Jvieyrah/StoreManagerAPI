const express = require('express');
// const router = express.Router();
const productController = require('../controllers/productController');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.findByID);
productRoute.post('/', productController.create);

module.exports = productRoute;
