const isInvalidEmptyId = (product) => {
  if (product.productId === undefined) {
    const invalidEmptyId = true;
    return invalidEmptyId;
  }
};

const isInvalidEmptyQuantity = (product) => {
  if (product.quantity === undefined) {
    const invalidEmptyQuantity = true;
    return invalidEmptyQuantity;
  }
};

  const isInvalidQuantity = (product) => {
    if (product.quantity < 1 || product.quantity === null) {
       const invalidqt = true;
      return invalidqt;
    }
};

async function saleValidator(req, res, next) {
  const products = req.body;
  const invalidEmptyId = products.some(isInvalidEmptyId);
  const invalidEmptyQuantity = products.some(isInvalidEmptyQuantity);
  const invalidQuantity = products.some(isInvalidQuantity);

  switch (true) {
    case invalidEmptyId:
      return res.status(400).json({ message: '"productId" is required' });
    case invalidEmptyQuantity:
      return res.status(400).json({ message: '"quantity" is required' });
    case invalidQuantity:
      return res.status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });  
    default:
      next();
  }
}

module.exports = { saleValidator };