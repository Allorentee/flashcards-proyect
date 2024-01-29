import './App.css'
import styled from 'styled-components'
import { Sidebar } from './components/ui'
import { Upbar } from './components'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

function App() {
  const navList = [{ label: 'item 1' }, { label: 'item2' }, { label: 'item3' }]

  return (
    <AppWrapper>
      <Sidebar navList={navList} />
      <MainContent>
        <Upbar />
      </MainContent>
    </AppWrapper>
  )
}

export default App

