import styled from 'styled-components'

export const DeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  overflow-y: auto;
`

export const DeckListStyled = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
`

export const DeckItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightblue;
  border-radius: 0.3rem;
  width: 100%;
  margin: 0 auto;
  max-width: 60rem;
  height: 20px;
  padding: 2rem;
`

