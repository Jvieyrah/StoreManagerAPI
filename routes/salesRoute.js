const express = require('express');
// const router = express.Router();
const salesController = require('../controllers/salesController');
const saleValidator = require('../middlewares/validateSales');

const salesRoute = express.Router();

salesRoute.post('/', saleValidator.saleValidator, salesController.create);

module.exports = salesRoute;
