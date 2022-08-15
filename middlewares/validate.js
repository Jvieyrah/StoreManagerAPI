// const Joi = require('joi');
// const productSchema = Joi.object().keys({
//   name: Joi.string().min(5).max(200).required()
//     .messages({
//     'string.min': '"name" length must be at least 5 characters long',
//     'any.required': '"name" is required',
//   }),
// });

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
  // const isValid = productSchema.validate(name);
  // console.log(isValid.error.details);
  // if (isValid.error) {
  //   return res.status(422).json({ message: isValid.error.message });
  // }
  next();
};

module.exports = { productValidator };