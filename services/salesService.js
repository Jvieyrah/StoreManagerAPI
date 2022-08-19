const salesModel = require('../models/salesModel');
const ProductService = require('./productService');

const create = async (products) => {
  const productsList = await ProductService.getAll();
  const registeredIds = productsList.map((product) => product.id);
  const productsIds = products.map((product) => product.productId);
  const test = productsIds.map((id) => registeredIds.includes(id));
  const invalidId = test.some((id) => id === false);
   if (invalidId === false) {
    const result = await salesModel.createSales(products);
     console.log(result);
     return result;
   }
    return false;
};

const getAll = async () => {
  const result = await salesModel.getAll();
  return result;
};

const getById = async (id) => {
  const result = await salesModel.getById(id);
  return result;
};

const destroy = async (id) => {
  const isThereSale = await salesModel.getById(id);
  if (isThereSale.length === 0) {
    return false;
  }
  const result = await salesModel.destroy(id);
  return result;
};

const update = async (id, products) => {
  const isThereSale = await salesModel.getById(id);
  if (isThereSale.length === 0) {
    return 'Sale not found';
  }
  const productsList = await ProductService.getAll();
  const registeredIds = productsList.map((product) => product.id);
  const productsIds = products.map((product) => product.productId);
  const test = productsIds.map((idz) => registeredIds.includes(idz));
  const invalidId = test.some((idx) => idx === false);
  if (invalidId === false) {
    const result = await salesModel.update(id, products);
    console.log(result);
    return result;
  }
  return 'Product not found';
};

module.exports = { create, getAll, getById, destroy, update };