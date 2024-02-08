import styled from 'styled-components'

export const DeckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  overflow-y: auto;
`

export const DeckListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DeckItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: bisque;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  width: 100%;
  max-width: 60rem;
  height: 20px;
  padding: 2rem;
`

