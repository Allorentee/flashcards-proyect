import { Card } from 'contract/Card.js'

export interface CardUseCases {
  getAll: () => Promise<Card[]>
  create: (data: Card) => Promise<Card>
  update: (id: string, data: Partial<Card>) => Promise<Card>
  delete: (id: string) => Promise<void>
}

