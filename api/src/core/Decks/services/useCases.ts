import { Deck } from 'contract/Deck.js'

export interface DeckUseCases {
  getAll: () => Promise<Deck[]>
  getOne: (deckID: string) => Promise<Deck>
  create: (data: Deck) => Promise<Deck>
  update: (id: string, data: Partial<Deck>) => Promise<Deck>
}

