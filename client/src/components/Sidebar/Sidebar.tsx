import { ExpandIcon } from '../icons'
import { NavList } from '../layout/Layout'
import { SidebarItem } from './SidebarItem'

export function Sidebar({ navList }: { navList: NavList[] }) {
  return (
    <nav className="w-20 bg-slate-300 flex flex-col justify-start items-center gap-16 px-4 py-6 border border-slate-400">
      <ExpandIcon style={{ width: '2rem' }} />
      <ul className="flex-col-auto list-none  gap-3">
        {navList.length > 0 &&
          navList?.map((item: NavList) => {
            return <SidebarItem item={item} key={item.title}></SidebarItem>
          })}
      </ul>
    </nav>
  )
}

