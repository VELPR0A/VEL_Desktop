import style from './estilo.module.css'

export default function HeaderEntregador() {
    return (
        <div className={style.header}>
            <h1 className={style.header_title}>Entregadores</h1>
            <h2 className={`${style.header_empresa} ${style.header_title}`}>Menu Food & Drink</h2>
        </div>
    )
}