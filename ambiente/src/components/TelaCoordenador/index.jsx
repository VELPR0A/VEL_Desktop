import MenuLateral from "../MenuLateral/MenuLateral"
import HeaderCoordenador from "../HeaderCoordenador/index"
import TabelaCoordenador from "../TabelaCoordenador/index"
import style from './estilo.module.css'

export default function TelaCoordenador() {
  return (
    <div className={style.conteiner}>
      <MenuLateral />
      <div className={style.conteudoPrincipal}>
        <HeaderCoordenador />
        <TabelaCoordenador />
      </div>
    </div>
  )
}

