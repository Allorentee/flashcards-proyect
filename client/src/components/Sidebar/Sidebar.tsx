import { ExpandIcon } from '../icons'
import { NavList } from '../layout/Layout'
import { SidebarItem } from './SidebarItem'
import { Menu, Navbar } from './Styles'

export function Sidebar({ navList }: Readonly<{ navList: NavList[] }>) {
  return (
    <Navbar>
      <ExpandIcon style={{ width: '2rem' }} />
      <Menu>
        {!!navList.length &&
          navList?.map((item: NavList) => {
            return <SidebarItem item={item} key={item.title}></SidebarItem>
          })}
      </Menu>
    </Navbar>
  )
}

