import { decks } from '../../__test__/__mocks__/decks'
import { DeckItem } from './DeckItem'
import { DeckListStyled, DeckWrapper } from './styles'

export function DeckCollection() {
  return (
    <DeckWrapper>
      <DeckListStyled>
        {decks.map(item => (
          <DeckItem key={crypto.randomUUID()} item={item}>
            {item.name}
          </DeckItem>
        ))}
      </DeckListStyled>
    </DeckWrapper>
  )
}

