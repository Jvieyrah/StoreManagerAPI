const productModel = require('../models/productModel');

const getAll = async () => productModel.getAll();
const findByID = async (id) => {
  // if (name.length < 3) return {isError: true, message: 'name <3 '};
  // if (level.length < 3) return {isError: true, message: 'level <3 '};

  const resultado = await productModel.findByID(id);
  if (!resultado) return null;
  return resultado;
};

const create = async (name) => {
  const resultado = await productModel.create(name);
  return resultado;
};

module.exports = { getAll, findByID, create };