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

const update = async (id, name) => {
  const productExixts = await productModel.findByID(id);
  if (!productExixts) return false;
  const resultado = await productModel.update(id, name);
  console.log(resultado);
  return resultado;
};

const destroy = async (id) => {
  const productExixts = await productModel.findByID(id);
  if (!productExixts) return false;
  const resultado = await productModel.destroy(id);
  return resultado;
};

const search = async (name) => {
  if (name.lenght === 0) {
    const products = await productModel.getAll();
    return products;
  }
  const resultado = await productModel.search(name);
  return resultado;
};

module.exports = { getAll, findByID, create, update, destroy, search };