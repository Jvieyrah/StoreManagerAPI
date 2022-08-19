const express = require('express');
// const router = express.Router();
const salesController = require('../controllers/salesController');
const saleValidator = require('../middlewares/validateSales');

const salesRoute = express.Router();

salesRoute.post('/', saleValidator.saleValidator, salesController.create);
salesRoute.get('/', salesController.getAll);
salesRoute.get('/:id', salesController.getById);
salesRoute.delete('/:id', salesController.destroy);
salesRoute.put('/:id', saleValidator.saleValidator, salesController.update);

module.exports = salesRoute;
