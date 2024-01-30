import { BaseRepository } from '../../base/repository/index.js'
import { Card, Cards } from '../../../models/Cards.js'

import { CardPorts } from './CardRepository.interface.js'

export class CardRepository extends BaseRepository<Card> implements CardPorts {
  getCardsByDeckID = async (deckID: string) => {
    const cards = await Cards.findAll({ where: { deckID } })
    return cards as Card[]
  }
}

