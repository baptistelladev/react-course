import { useState } from "react"

export default function Form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  async function salvarUsuario() {
    await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify({ nome, idade })
    })

    setNome("");
    setIdade(0)

    const resp = await fetch('/api/form');
    const usuarios = await resp.json();
    setUsuarios(usuarios)
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario: any, i: number) => {
      return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
    })
  }

  return (
    <div>
      <h1>Integrando API #02</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}></input>
      <input maxLength={2} type="number" value={idade} onChange={(e) => setIdade(+e.target.value)}></input>
      <span></span>
      <button onClick={salvarUsuario}>Enviar</button>
      <span></span>
      <span></span>
      <h1>Lista de usuários</h1>
      <ul>
        {renderizarUsuarios()}
      </ul>
    </div>
  )
}