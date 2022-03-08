const Joi = require("joi");
joi.objectid = require("joi-objectid");

const validateCreateCustomer = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(10).required(),
  });
  return schema.validate(data);
};

const validateUpdateCustomer = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(10).required(),
    customerId: Joi.number().required(),
  });
};

module.exports = { validateCreateCustomer, validateUpdateCustomer };
