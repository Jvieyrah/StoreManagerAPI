const salesService = require('../services/salesService');

const create = async (req, res) => {
  const products = req.body;
  const result = await salesService.create(products);
  if (result === false) {
    return res.status(404).json({ message: 'Product not found' });
  }
   return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const result = await salesService.getAll();
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getById(id);
  console.log(result.length);
  if (result.length === 0) { 
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(result);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.destroy(id);
  if (result === false) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(204).json();
};

const update = async (req, res) => {
  const { id } = req.params;
  const products = req.body;
  const result = await salesService.update(id, products);
  if (result === 'Sale not found') {
    return res.status(404).json({ message: result });
  }
  if (result === 'Product not found') {
    return res.status(404).json({ message: result });
  }
  return res.status(200).json(result);
};

  module.exports = { create, getAll, getById, destroy, update };
