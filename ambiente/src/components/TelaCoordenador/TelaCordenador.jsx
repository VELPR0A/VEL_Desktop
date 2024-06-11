import MenuLateral from "../MenuLateral/MenuLateral"
import HeaderCoordenador from "../HeaderCoordenador/index"
import TabelaCoordenador from "../TabelaCoordenador/TabelaCoordenador"
import style from './estilo.module.css'

export default function TelaCoordenador() {
  return (
    <div className={style.conteiner}>
      <MenuLateral pagina="Coordenadores" />
      <div className={style.conteudoPrincipal}>
        <HeaderCoordenador />
        <TabelaCoordenador />
      </div>
    </div>
  )
}