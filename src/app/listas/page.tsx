// Renderizar listas no html

function createList (length: number) {
  const list = []

  for (let i = 0; i <= length; i++) {
    list.push(<li>{i}</li>)
  }

  return list
}


export default function Lista () {
  return (
    <ul>
      { createList(10) }
    </ul>
  )
}