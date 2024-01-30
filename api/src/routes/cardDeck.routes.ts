import { Router } from 'express'

import { CardDeckController } from '../core/Decks/controllers/DeckController.js'

export const cardDeckRoute = Router()
const controller = new CardDeckController()

cardDeckRoute.get('/', controller.getAll)
cardDeckRoute.get('/flashcards/:id', controller.getOne)
cardDeckRoute.get('/', controller.getAll)
cardDeckRoute.post('/', controller.create)
cardDeckRoute.put('/:id', controller.update)
cardDeckRoute.delete('/:id', controller.delete)
