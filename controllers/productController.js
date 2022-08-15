const productService = require('../services/productService');

const ERROR_500 = { error: 'Something went wrong' };

const getAll = async (req, res, _next) => {
  try {
    const resultado = await productService.getAll();
    console.log(resultado);
    return res.status(200).json(resultado);
  } catch (error) {
    // next(error);
    console.log(error);
    res.status(500).json({ message: 'Algo deu erro. Desculpe!' });
  }
};

const findByID = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // if (name.length < 3) return res.status(422).json({ message: 'name < 3' });
    const resultado = await productService.findByID(id);
    if (!resultado) return res.status(404).json({ message: 'Product not found' }); 
    return res.status(200).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).json(ERROR_500);
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);
    const resultado = await productService.create(name);
    return res.status(201).json(resultado);
  } catch (error) {
    console.log(error);
    return res.status(500).json(ERROR_500);
  }
};

module.exports = { getAll, findByID, create };