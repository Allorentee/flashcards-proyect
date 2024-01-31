import { RequestHandler, Request, Response, NextFunction } from 'express'
import { ValidationError } from 'sequelize'
import { ValidationFilesError } from './errorsFactory.js'

export const catchErrors = (requestHandler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await requestHandler(req, res, next)
    } catch (error) {
      if (error instanceof ValidationError) {
        // !TODO: REFACTOR THIS ERROR HANDLER
        const validationError = ValidationFilesError
        validationError.message = error.message
        next(validationError)
      }
      next(error)
    }
  }
}

