import { BaseRepository } from '../../base/repository/index.js'
import { Cards } from '../../../models/Cards.js'

import { CardPorts } from './CardRepository.interface.js'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class CardRepository extends BaseRepository<any> implements CardPorts {
  getCardsByDeckID = async (deckID: string) => {
    const cards = await Cards.findAll({ where: { deckID } })
    return cards
  }
}

