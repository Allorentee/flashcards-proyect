import { Link } from 'react-router-dom'
import { NavList } from '../layout/Layout'

const SidebarItem = ({ item }: { item: NavList }) => {
  return (
    <>
      <Link to={item.link} className="w-full flex-row-auto ">
        <div className="flex flex-row justify-between gap-4">
          <div className="w-6">{item.icon}</div>
          <div className="hidden">{item.title}</div>
        </div>
      </Link>
    </>
  )
}

export { SidebarItem }

