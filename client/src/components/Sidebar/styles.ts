import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 3rem;
  max-height: 20rem;
  position: sticky;
  top: 25%;
  left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: 0px 0px 20px 5px lightgray;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  border: 1px solid lightgray;
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

