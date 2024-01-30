import { Card, Cards } from '../../../models/Cards.js'
import { CardRepository } from '../repository/CardRepository.js'
import { CardUseCases } from './CardService.interface.js'

export class CardService implements CardUseCases {
  cardRepository = new CardRepository(Cards)

  getAll = async () => {
    const response = await this.cardRepository.getAll()
    return response
  }

  create = async (data: Partial<Card>) => {
    const reponse = await this.cardRepository.create(data)
    return reponse
  }

  update = async (id: string, data: Partial<Card>) => {
    const response = await this.cardRepository.update(id, data)
    return response
  }

  delete = async (id: string) => {
    await this.cardRepository.destroy(id)
  }
}

