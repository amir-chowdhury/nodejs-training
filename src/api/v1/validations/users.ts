import Joi from 'joi'
import { User } from '../interfaces/users'

const userSchemaRequired: Joi.ObjectSchema<User> = Joi.object({
  login: Joi.string()
    .alphanum()
    .required(),
  password: Joi.string()
    .required(),
  age: Joi.number()
    .integer()
    .min(4)
    .max(130)
    .required()
})

const userSchema: Joi.ObjectSchema<User> = Joi.object({
  login: Joi.string()
    .alphanum(),
  password: Joi.string(),
  age: Joi.number()
    .integer()
    .min(4)
    .max(130)
})

export const UserValidation = {
  create: userSchemaRequired,
  update: userSchema
}
