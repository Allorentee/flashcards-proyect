import { Deck as DeckContract } from 'contract/Deck.js'
import { Cards } from '../../../models/Cards.js'
import { CardRepository } from '../../Cards/repository/CardRepository.js'
import { CardDeckRepository } from '../repository/DeckRepository.js'
import { DeckUseCases } from './useCases.js'
import { Decks } from '../../../models/Decks.js'

export class CardDeckService implements DeckUseCases {
  cardDeckRepository = new CardDeckRepository(Decks)
  cardRepository = new CardRepository(Cards)

  getAll = async () => {
    const response = await this.cardDeckRepository.getAll()
    return response
  }

  getOne = async (deckID: string) => {
    const cards = await this.cardRepository.getCardsByDeckID(deckID)
    const deck = await this.cardDeckRepository.getOne(deckID)
    const collectionMapped = { ...deck.dataValues, cards }
    return collectionMapped
  }

  create = async (data: Partial<DeckContract>) => {
    const reponse = await this.cardDeckRepository.create(data)
    return reponse
  }

  update = async (id: string, data: Partial<DeckContract>) => {
    const response = await this.cardDeckRepository.update(id, data)
    return response
  }

  delete = async (id: string) => {
    await this.cardDeckRepository.destroy(id)
  }
}

