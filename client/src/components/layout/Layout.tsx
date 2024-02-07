import { Sidebar, Upbar } from '..'
import { ReactNode } from 'react'
import { ProfileIcon } from '../icons/ProfileIcon'
import { ExpandIcon } from '../icons'
import { AppWrapper, MainStyled } from './styles'

export interface NavList {
  title: string
  icon: ReactNode
  link: string
}

function Layout({ children }: { children: ReactNode }) {
  const section = 'Perfil'
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
      <section style={{ flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Upbar section={section} />
          {/* main content */}
          <MainStyled className="px-52 py-10 ">{children}</MainStyled>
        </div>
      </section>
    </AppWrapper>
  )
}

export { Layout }

