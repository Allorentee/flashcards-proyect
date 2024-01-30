import { Request, Response } from 'express'
import { catchErrors } from '../../../errors/asyncHandleErrors.js'
import { DeckService } from '../services/DeckService.js'

const service = DeckService()

export const getAll = catchErrors(async (_req: Request, res: Response) => {
  const items = await service.getAll()
  res.status(200).json(items)
})

export const getOne = catchErrors(async (req: Request, res: Response) => {
  const deckID = req.params.id
  const items = await service.getOne(deckID)
  res.status(200).json(items)
})

export const create = catchErrors(async (req: Request, res: Response) => {
  const data = req.body
  const item = await service.create(data)
  res.status(200).json(item)
})

export const update = catchErrors(async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  const item = await service.update(id, data)
  res.status(200).json(item)
})

export const destroy = catchErrors(async (req: Request, res: Response) => {
  const id = req.params.id
  await service.deleteService(id)
  res.status(200)
})

