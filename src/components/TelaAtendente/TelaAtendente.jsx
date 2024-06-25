import MenuLateral from "../MenuLateralAtendenteCoordenador/MenuLateral"
import Header from "../Header/index"
import FormAtendente from "../FormAtendente/index"
import style from './estilo.module.css'

export default function TelaAtendente() {
  return (
    <div className={style.conteiner}>
      <MenuLateral pagina="Atendente" />
      <div className={style.conteudoPrincipal}>
        <Header titulo="Atribuir Pedidos" empresa="" />
        <FormAtendente />
      </div>
    </div>
  )
}