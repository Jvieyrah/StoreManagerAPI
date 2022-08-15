const express = require('express');
// const router = express.Router();
const productController = require('../controllers/productController');
const validate = require('../middlewares/validate');

const productRoute = express.Router();

productRoute.get('/', productController.getAll);
productRoute.get('/:id', productController.findByID);
productRoute.post('/', validate.productValidator, productController.create);

module.exports = productRoute;
