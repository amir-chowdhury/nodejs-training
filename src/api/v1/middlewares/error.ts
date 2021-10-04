import { NextFunction, Request, Response } from 'express'
import logger from 'loglevel'
import { env } from 'process'

function errorMiddleware (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (res.headersSent) {
    next(error)
  } else {
    logger.error(error)
    res.status(500)
    res.json({
      message: error.message,
      ...(env.NODE_ENV === 'production' ? null : { stack: error.stack })
    })
  }
}

export { errorMiddleware }
