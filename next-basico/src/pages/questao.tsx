import { useEffect, useState } from "react"

export default function Questao() {

  const [questao, setQuestao] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/questao/1')
    .then(resp => resp.json())
    .then(setQuestao)
  }, [])

  function renderizarRespostas() {
    if (questao) {
      return questao.respostas.map((resposta: any, index) => {
        return <li key={index}>{resposta}</li>
      })
    }
  }

  return (
    <>
      <div>
        <h1>Questão ({questao?.id})</h1>
        <div>
          <span>{questao?.enunciado}</span>
          {renderizarRespostas()}
        </div>
      </div>
    </>
  )
}