
export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico(props: any) {

  return (
    <div>
      <span>Aleatório: {props.numero}</span>
    </div>
  )
}