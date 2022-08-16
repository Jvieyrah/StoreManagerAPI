const salesService = require('../services/salesService');

const create = async (req, res) => {
  const products = req.body;
  
  const result = await salesService.create(products);
  console.log(result);
  return res.status(201).json(result);
};

module.exports = { create };