import { Router } from 'express'

import { CardController } from '../core/Cards/controllers/CardController.js'

export const cardRoute = Router()
const controller = new CardController()

cardRoute.get('/', controller.getAll)
cardRoute.get('/', controller.getAll)
cardRoute.post('/', controller.create)
cardRoute.put('/:id', controller.update)
cardRoute.delete('/:id', controller.delete)
