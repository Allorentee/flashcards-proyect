import { Deck, DeckWithCards } from '../../../models/Decks.js'

export interface DeckUseCases {
  getAll: () => Promise<Deck[]>
  getOne: (deckID: string) => Promise<Partial<DeckWithCards>>
  create: (data: Deck) => Promise<Deck>
  update: (id: string, data: Partial<Deck>) => Promise<Deck>
  deleteService: (id: string) => Promise<void>
}

