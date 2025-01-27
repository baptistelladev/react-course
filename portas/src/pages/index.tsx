import { useState } from "react";
import Porta from "../../components/Porta";
import Presente from "../../components/Presente";
import PortaModel from "../../model/porta";
import { atualizarPortas, criarPortas } from "../../functions/portas";



export default function Home() {

  const [ portas, setPortas ] = useState( criarPortas(3, 2));

  function renderizarPortas() {
    return portas.map((porta: any) => {
      return <Porta value={ porta } key={porta.numero} onChange={(novaPorta: PortaModel) => {
        setPortas(atualizarPortas(portas, novaPorta));
      }} />
    })
  }

  return (
    <>
      <div style={{
        display: 'flex'
      }}>
        {renderizarPortas()}
      </div>
    </>
  );
}
