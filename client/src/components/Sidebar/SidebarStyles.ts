import { styled } from 'styled-components'

export const SidebarContainer = styled.div`
  width: 14.5rem;
  min-height: 100dvh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0.5rem;
  border: 1px solid lightgray;
`

export const SidebarList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.2rem;
`

export const SidebarItem = styled.li`
  display: flex;
  justify-content: row;
  justify-content: center;
  color: black;
  padding: 0.5rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color: #dedcdc;
  }
`

