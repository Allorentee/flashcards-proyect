import { Routes, Route } from 'react-router-dom'
import { Profile } from '../../pages/Profile/Profile'
import { Community } from '../../pages/Community/community'

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Community}></Route>
      <Route path="/profile" Component={Profile}></Route>
    </Routes>
  )
}

export { Approutes }

