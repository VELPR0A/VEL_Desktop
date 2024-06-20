import MenuLateral from "../MenuLateral/MenuLateral"
import Header from "../Header/index"
import TabelaCoordenador from "../TabelaCoordenador/TabelaCoordenador"
import style from './estilo.module.css'

export default function TelaCoordenador() {
  return (
    <div className={style.conteiner}>
      <MenuLateral pagina="Coordenadores" />
      <div className={style.conteudoPrincipal}>
      <Header titulo="Coordenadores" empresa="Menu Food & Drink"/>
        <TabelaCoordenador />
      </div>
    </div>
  )
}