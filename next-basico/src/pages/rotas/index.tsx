
import Link from 'next/link'
import router from 'next/router'
export default function rotas() {
  return (
    <div>
      <h1>rotas</h1>

      <ul>

      <Link href="/rotas/params?name=Ana&id=123">
      <li>
          teste
          </li>
      </Link>
        
      </ul>


      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <button onClick={() => router.push('/rotas/123/buscar')}>buscar</button>
      </div>
    </div>
  )
}