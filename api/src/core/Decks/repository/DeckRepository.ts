import { Deck } from '../../../models/Decks.js'
import { BaseRepository } from '../../base/repository/index.js'
import { CardDeckPorts } from './DeckPorts.js'

export class CardDeckRepository extends BaseRepository<Deck> implements CardDeckPorts {}

