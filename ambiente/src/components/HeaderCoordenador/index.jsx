import style from './estilo.module.css'

export default function HeaderCoordenador() {
    return (
        <div className={style.header}>
            <h1 className={style.header_title}>Coordenadores</h1>
            <h2 className={`${style.header_empresa} ${style.header_title}`}>Menu Food & Drink</h2>
        </div>
    )
}