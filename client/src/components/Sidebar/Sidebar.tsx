import { ExpandIcon } from '../icons'
import { SidebarContainer, SidebarItem, SidebarList } from './SidebarStyles'

export function Sidebar(navList: any) {
  console.log(navList.length)
  return (
    <>
      <SidebarContainer>
        <ExpandIcon style={{ width: '2rem' }} />
        <SidebarList>
          {navList.navList.length > 0 &&
            navList?.navList.map(item => {
              console.log(item)
              return <SidebarItem>{item.label}</SidebarItem>
            })}
        </SidebarList>
      </SidebarContainer>
    </>
  )
}

