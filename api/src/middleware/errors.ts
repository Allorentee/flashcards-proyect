import { BusinessError } from '../errors/errorsFactory.js'
import { NextFunction, Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrors = (err: any, _req: Request, res: Response, next: NextFunction) => {
  const isClientError = err instanceof BusinessError
  const appError = isClientError
    ? { message: err.message, code: err.code, name: err.name, status: err.status }
    : {
        status: 500,
        message: 'Server error',
        stack: false
      }

  res.status(err.status).json({ error: appError })
}

