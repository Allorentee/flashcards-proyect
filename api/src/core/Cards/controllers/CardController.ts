import { Request, Response } from 'express'

import { CardService } from '../services/CardService.js'
import { CardPorts } from './CardController.interface.js'
import { Card } from '../../../Card.js'

export class CardController implements CardPorts {
  cardControllerService = new CardService()

  getAll = async (_req: Request, res: Response<Card[]>) => {
    try {
      const items = await this.cardControllerService.getAll()
      res.status(200).json(items)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  create = async (req: Request, res: Response<Card>) => {
    try {
      const data = req.body
      const item = await this.cardControllerService.create(data)
      res.status(200).json(item)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  update = async (req: Request, res: Response<Card>) => {
    try {
      const id = req.params.id
      const data = req.body
      const item = await this.cardControllerService.update(id, data)
      res.status(200).json(item)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  delete = async (req: Request, res: Response<void>) => {
    try {
      const id = req.params.id
      await this.cardControllerService.delete(id)
      res.status(200)
    } catch (e: any) {
      console.log(e.message)
    }
  }
}

