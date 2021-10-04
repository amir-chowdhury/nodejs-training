import { Request, Response, NextFunction } from 'express'
import { ObjectSchema, ValidationErrorItem } from 'joi'

function errorResponse (schemaErrors: ValidationErrorItem[]) {
  const errors = schemaErrors.map((error) => {
    const { path, message } = error
    return { path, message }
  })
  return {
    status: 'failed',
    errors,
  }
}

function validateSchema (schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false,
    })

    if (error?.isJoi) {
      res.status(400).json(errorResponse(error.details))
    } else {
      next()
    }
  }
}

export { errorResponse, validateSchema }
