import { DeckItemStyled } from './styles'

export function DeckItem({ item }: any) {
  return <DeckItemStyled>{item.name}</DeckItemStyled>
}

