export default function fragment () {
  return (
    <>
      <h1>O que é o fragment?</h1>
      <p>
      O React só pode retornar um elemento, porem às vezes você quer criar algo e não, quer o envolver em uma div, pois precisará controlar a disposição desses elementos com css, no caso do react exite o fragment { '<></>' } que nada mais é do que um elemento que não será renderizado no dom. 
      </p>
    </>
  )
}