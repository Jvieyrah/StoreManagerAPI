const ProductService = require('../services/productService');

const isInvalidEmptyId = (product) => {
  if (!product.productId) {
    const invalidEmptyId = true;
    return invalidEmptyId;
  }
};

const isInvalidEmptyQuantity = (product) => {
  if (!product.quantity) {
    const invalidEmptyQuantity = true;
    return invalidEmptyQuantity;
  }
};

  const isInvalidQuantity = (product) => {
    if (product.quantity < 1) {
      const invalidqt = true;
      return invalidqt;
    }
};

async function saleValidator(req, res, next) {
  const products = req.body;

  await Promise.all(products.map(async (product) => {
    if (isInvalidEmptyId(product)) {
      return res.status(400).json({ message: '"productId" is required' });
    } if (isInvalidQuantity(product)) {
      return res
        .status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    } if (isInvalidEmptyQuantity(product)) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    const isProductFound = await ProductService.findByID(product.productId);
     if (isProductFound === null) {
      return res.status(404).json({ message: 'Product not found' });
     }
  }));
  next();
}

module.exports = { saleValidator };