import MenuLateral from "../MenuLateral/MenuLateral"
import HeaderEntregador from "../HeaderEntregador/index"
import TabelaEntregador from "../TabelaEntregador/TabelaEntregador"
import style from './estilo.module.css'

export default function TelaEntregador() {
  return (
    <div className={style.conteiner}>
      <MenuLateral pagina="Entregadores" />
      <div className={style.conteudoPrincipal}>
        <HeaderEntregador />
        <TabelaEntregador />
      </div>
    </div>
  )
}