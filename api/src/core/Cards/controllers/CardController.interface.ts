import { Card } from 'contract/Card.js'
import { Request, Response } from 'express'

export interface CardPorts {
  getAll: (req: Request, res: Response<Card[]>) => Promise<void>
  create: (req: Request, res: Response<Card>) => Promise<void>
  update: (req: Request, res: Response<Card>) => Promise<void>
  delete: (req: Request, res: Response<void>) => void
}

