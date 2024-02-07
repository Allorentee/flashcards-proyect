import { Link } from 'react-router-dom'
import { NavList } from '../layout/Layout'
import { MenuItem, MenuItemWrapper } from './Styles'

const SidebarItem = ({ item }: { item: NavList }) => {
  return (
    <MenuItemWrapper>
      <Link to={item.link}>
        <MenuItem>
          <div style={{ width: '1.5rem' }}>{item.icon}</div>
          <h2 className="hidden">{item.title}</h2>
        </MenuItem>
      </Link>
    </MenuItemWrapper>
  )
}

export { SidebarItem }

