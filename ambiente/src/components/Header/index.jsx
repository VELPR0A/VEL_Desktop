import style from './estilo.module.css'

export default function Header({titulo, empresa}) {
    return (
        <div className={style.header}>
            <h1 className={style.header_title}>{titulo}</h1>
            <h2 className={`${style.header_empresa} ${style.header_title}`}>{empresa}</h2>
        </div>
    )
}