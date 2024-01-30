import { RequestHandler, Request, Response, NextFunction } from 'express'

export const catchErrors = (requestHandler: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await requestHandler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

export const catchs =
  (requesthandle: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await requesthandle(req, res, next)
    } catch (error) {
      next(error)
    }
  }

