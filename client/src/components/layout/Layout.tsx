import { Sidebar } from '..'
import { ReactNode } from 'react'
import { ProfileIcon } from '../icons/ProfileIcon'
import { ExpandIcon } from '../icons'
import { AppWrapper, MainStyled } from './styles'

export interface NavList {
  title: string
  icon: ReactNode
  link: string
}

export function Layout({ children }: { children: ReactNode }) {
  const navList = [
    {
      title: 'Perfil',
      icon: <ExpandIcon />,
      link: '/profile'
    },
    {
      title: 'Comunidad',
      icon: <ExpandIcon />,
      link: '/'
    },
    {
      title: 'Estadísticas',
      icon: <ProfileIcon />,
      link: '/statistics'
    }
  ]

  return (
    <AppWrapper>
      {/* left */}
      <Sidebar navList={navList} />
      {/* right */}
      <section style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* main content */}
        <MainStyled>{children}</MainStyled>
      </section>
    </AppWrapper>
  )
}

