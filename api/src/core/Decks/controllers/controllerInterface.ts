import { Deck } from 'contract/Deck.js'
import { Request, Response } from 'express'

export interface CardDeckPorts {
  getAll: (req: Request, res: Response<Deck[]>) => Promise<void>
  getOne: (req: Request, res: Response<Deck>) => Promise<void>
  create: (req: Request, res: Response<Deck>) => Promise<void>
  update: (req: Request, res: Response<Deck>) => Promise<void>
  delete: (req: Request, res: Response) => void
}

