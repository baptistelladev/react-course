import { useRouter } from "next/router";

import Link from 'next/link'


export default function Params() {

  const router = useRouter();

  const query = router.query;

  console.log(query);
  

  return (
    <div>
      <h1>Rotas - {query.id} - {query.nome}</h1>
      <Link href="/rotas">
        <button type="button">Voltar</button>
      </Link>
    </div>
  )
}