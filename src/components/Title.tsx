interface ITitleProps {
  title: string
  subtitle: string
}

export default function Title (props: ITitleProps) {
  return (
    <>
      <h1>{ props.title }</h1>
      <h2>{ props.subtitle }</h2>
    </>
  )
}