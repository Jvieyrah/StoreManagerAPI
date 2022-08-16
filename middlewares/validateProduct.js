const productValidator = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    const fourHandred = '"name" is required';
   return res.status(400).json({ message: fourHandred });
  }
  if (name.length < 5) {
    const fourtwotwo = '"name" length must be at least 5 characters long';
    return res.status(422).json({ message: fourtwotwo });
  }
  next();
};

module.exports = { productValidator };