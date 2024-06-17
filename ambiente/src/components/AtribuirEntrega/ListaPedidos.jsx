export default function ListaPedidos(props){
    return(
        <>
            <div className="Pedidos">
                <h3>ID: {props.id}</h3>
                <p>{props.endereco}</p>
            </div>
        </>
    )
}