
import styles from "@/styles/Porta.module.scss";
import PortaModel from "../model/porta";
import Presente from "./Presente";

interface PortaProps {
  value: PortaModel,
  onChange: (novaPorta : PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value;
  const doorIsSelected = porta.selecionada && !porta.aberta ? styles.selecionada : '';

  function alternarSelecao(e: any) {
    return props.onChange(porta.alternarSelecao());
  }

  function abrir(e: any) {
    e.stopPropagation();
    return props.onChange(porta.abrir());
  }

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  return (
    <>
    <div
    className={`${styles.area} ${doorIsSelected} }`}
    onClick={alternarSelecao}>

      <div className={styles.estrutura}>
        { porta.fechada ? renderizarPorta() :  porta.temPresente ? <Presente></Presente> : false }
      </div>

      <div className={styles.chao}>

      </div>
    </div>
    </>
  );
}
