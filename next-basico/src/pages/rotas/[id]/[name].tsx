import { useRouter } from "next/router";


export default function Name() {

  const router = useRouter();

  const query = router.query.name;

  console.log(query);
  

  return (
    <div>
      <h1>Rotas - Id - {query}</h1>
    </div>
  )
}