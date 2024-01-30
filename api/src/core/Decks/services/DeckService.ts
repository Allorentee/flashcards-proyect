import { Cards } from '../../../models/Cards.js'
import { Deck, Decks } from '../../../models/Decks.js'
import { CardRepository } from '../../Cards/repository/CardRepository.js'
import { CardDeckRepository } from '../repository/DeckRepository.js'
import { DeckUseCases } from './useCases.js'

export function DeckService(): DeckUseCases {
  const cardDeckRepository = new CardDeckRepository(Decks)
  const cardRepository = new CardRepository(Cards)

  const getAll = async () => {
    const response = await cardDeckRepository.getAll()
    return response
  }

  const getOne = async (deckID: string) => {
    const cards = await cardRepository.getCardsByDeckID(deckID)
    const deck = await cardDeckRepository.getOne(deckID)
    const collectionMapped = { ...deck.dataValues, cards }
    return collectionMapped
  }

  const create = async (data: Partial<Deck>) => {
    const reponse = await cardDeckRepository.create(data)
    return reponse
  }

  const update = async (id: string, data: Partial<Deck>) => {
    const response = await cardDeckRepository.update(id, data)
    return response
  }

  const deleteService = async (id: string) => {
    await cardDeckRepository.destroy(id)
  }

  return {
    getAll,
    create,
    getOne,
    update,
    deleteService
  }
}

