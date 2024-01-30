import { Card } from '../../../models/Cards.js'
import { BaseRepositoryInterface } from '../../base/repository/baseInterface.js'

export interface CardPorts extends BaseRepositoryInterface<Card> {
  getCardsByDeckID: (deckID: string) => Promise<Card[]>
}
