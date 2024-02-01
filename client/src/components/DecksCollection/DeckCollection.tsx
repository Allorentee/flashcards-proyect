import { DeckItem } from './DeckItem'

function DeckCollection() {
  const decks = [
    {
      id: '1',
      name: 'Mazo de Aventuras',
      inCommunity: true
    },
    {
      id: '2',
      name: 'Mazo de Hechizos',
      inCommunity: true
    },
    {
      id: '3',
      name: 'Mazo de Bestias',
      inCommunity: false
    },
    {
      id: '4',
      name: 'Mazo de Dragones',
      inCommunity: true
    },
    {
      id: '5',
      name: 'Mazo de Defensa',
      inCommunity: false
    },
    {
      id: '6',
      name: 'Mazo de Ataque',
      inCommunity: true
    },
    {
      id: '7',
      name: 'Mazo de Trampas',
      inCommunity: true
    },
    {
      id: '8',
      name: 'Mazo de Magia Negra',
      inCommunity: false
    },
    {
      id: '9',
      name: 'Mazo de Magia Blanca',
      inCommunity: true
    },
    {
      id: '10',
      name: 'Mazo de Criaturas Místicas',
      inCommunity: true
    }
  ]
  return (
    <div className="flex flex-col gap-5  overflow-y-auto">
      <h1>Mis Decks</h1>
      <ul className="flex flex-col gap-5 ">
        {decks.map(item => {
          return <DeckItem item={item} key={item.name}></DeckItem>
        })}
      </ul>
    </div>
  )
}

export { DeckCollection }

