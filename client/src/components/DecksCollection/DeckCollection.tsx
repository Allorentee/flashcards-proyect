import { decks } from '../../__test__/__mocks__/decks'
import { DeckItem } from './DeckItem'
import { DeckListStyled, DeckWrapper } from './styles'

function DeckCollection() {
  return (
    <DeckWrapper>
      <h1>Mis Decks</h1>
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

export { DeckCollection }

