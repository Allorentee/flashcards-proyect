import { Request, Response } from 'express'

import { CardDeckService } from '../services/DeckService.js'
import { CardDeckPorts } from './controllerInterface.js'

export class CardDeckController implements CardDeckPorts {
  cardControllerService = new CardDeckService()

  getAll = async (_req: Request, res: Response) => {
    try {
      const items = await this.cardControllerService.getAll()
      res.status(200).json(items)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  getOne = async (req: Request, res: Response) => {
    try {
      const deckID = req.params.id
      const items = await this.cardControllerService.getOne(deckID)
      res.status(200).json(items)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const data = req.body
      const item = await this.cardControllerService.create(data)
      res.status(200).json(item)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      const data = req.body
      const item = await this.cardControllerService.update(id, data)
      res.status(200).json(item)
    } catch (e: any) {
      console.log(e.message)
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      await this.cardControllerService.delete(id)
      res.status(200)
    } catch (e: any) {
      console.log(e.message)
    }
  }
}

