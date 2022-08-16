const salesModel = require('../models/salesModel');

const create = async (products) => {
  const result = await salesModel.createSales(products);
  console.log(result);
  return result;
};

module.exports = { create };