function DeckItem({ item }: any) {
  return (
    <div className="relative flex min-w-80 h-20 p-4 flex-row rounded-xl bg-red-400 bg-clip-border text-gray-700 shadow-md">
      <h1>{item.name}</h1>
    </div>
  )
}

export { DeckItem }

