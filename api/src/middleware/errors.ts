import { BusinessError } from '../errors/errorsFactory.js'
import { Request, Response } from 'express'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleErrors = (error: any, _req: Request, res: Response) => {
  const isClientError = error instanceof BusinessError

  const appError = isClientError
    ? { message: error.message, code: error.code, name: error.name, status: error.status }
    : {
        status: 500,
        message: 'Server error',
        stack: false
      }

  res.status(error.status).json({ error: appError })
}

