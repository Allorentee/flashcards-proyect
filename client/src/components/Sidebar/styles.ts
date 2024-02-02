import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 5rem;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4rem;
  padding: 4px 6px;
  border: 1px solid gray;
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 1rem;
`

export const MenuItemWrapper = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & h2 {
    font-size: 1rem;
    display: none;
    font-family: 'ubuntu-regular';
  }
`

