const Joi = require('joi')

const customersSchema = Joi.array().items(Joi.object().keys({
  address_1: Joi.string(),
  address_2: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  zip: Joi.number(),
  createdAt: Joi.string(),
  email: Joi.string(),
  firstName: Joi.string(),
  id: Joi.string(),
  lastName: Joi.string(),
  phone: Joi.string(),
  updatedAt: Joi.string()
}))

module.exports = customersSchema