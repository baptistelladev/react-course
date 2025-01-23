import router, { useRouter } from "next/router";


export default function Buscar() {

  const router = useRouter();

  const query = router.query.id

  function back() {
    router.back()
  }

  function goTo() {
    router.push({
      pathname: '/rotas/params',
      query: {
        id: 123,
        nome: 'Ana'
      }
    })
  }

  return (
    <div>
      <h1>Rotas - { query } - Buscar</h1>
      <button onClick={() => back()}>{'voltar'}</button>
      <button onClick={() => goTo()}>{'ir para ana'}</button>
    </div>
  )
}