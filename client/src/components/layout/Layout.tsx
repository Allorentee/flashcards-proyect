import { Sidebar, Upbar } from '..'
import { ReactNode } from 'react'
import { ProfileIcon } from '../icons/ProfileIcon'
import { ExpandIcon } from '../icons'

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
      icon: <ProfileIcon />,
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
    <div className="flex flex-row min-h-screen">
      {/* left */}
      <Sidebar navList={navList} />
      {/* right */}
      <section className="flex-auto w-64">
        <div className="flex flex-col">
          <Upbar section={section} />
          {/* main content */}
          <main className="px-52 py-10 ">{children}</main>
        </div>
      </section>
    </div>
  )
}

export { Layout }

