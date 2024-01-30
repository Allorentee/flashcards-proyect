import { destroy, getAll, getOne, update, create } from '../core/Decks/controllers/DeckController.js'
import { Router } from 'express'

export const cardDeckRoute = Router()

cardDeckRoute.get('/', getAll)
cardDeckRoute.get('/flashcards/:id', getOne)
cardDeckRoute.get('/', getAll)
cardDeckRoute.post('/', create)
cardDeckRoute.put('/:id', update)
cardDeckRoute.delete('/:id', destroy)
