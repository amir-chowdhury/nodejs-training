import { Request, Response, NextFunction } from 'express'
import { ObjectSchema, ValidationErrorItem } from 'joi'

interface ErrorResponse {
  status: string
  errors: Array<{
    path: Array<string | number>
    message: string
  }>
}

function errorResponse (schemaErrors: ValidationErrorItem[]): ErrorResponse {
  const errors = schemaErrors.map((error) => {
    const { path, message } = error
    return { path, message }
  })
  return {
    status: 'failed',
    errors
  }
}

function validateSchema (schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      allowUnknown: false
    })

    if (error?.isJoi === true) {
      res.status(400).json(errorResponse(error.details))
    } else {
      next()
    }
  }
}

export { errorResponse, validateSchema }
