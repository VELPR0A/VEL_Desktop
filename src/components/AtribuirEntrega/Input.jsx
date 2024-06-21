import React, { useState } from 'react';
import ModalConfirmar from "../ModalConfirmarEntrega/index";

export default function Input() {
    const [isModalConfirmarOpen, setIsModalConfirmarOpen] = useState(false);

    let IDEntregador = document.querySelector("#IDEntregador");
    let IDPedido = document.querySelector("#IDPedido");

    function AbrirCaixa() {
        IDEntregador = document.querySelector("#IDEntregador").value;
        IDPedido = document.querySelector("#IDPedido").value;
        console.log(IDEntregador, IDPedido)
        setIsModalConfirmarOpen(true)
    }

    return (
        <>
            <div className="Input">
                <form>
                    <label className="Titulo-Form">ID do Pedido</label>
                    <input className="ID-Pedido" id="IDPedido" type="text" placeholder="Insira o ID do Pedido" />
                    
                    <label className="Titulo-Form">ID do Entregador</label>
                    <input className="ID-Entregador" id="IDEntregador" type="text" placeholder="Insira o ID do Entregador" />

                    <div className="Botao">
                        <button type="button" onClick={()=> AbrirCaixa()}>ENVIAR</button>
                    </div>

                    <ModalConfirmar isOpen={isModalConfirmarOpen} onClose={()=>setIsModalConfirmarOpen(false)} pedido={IDPedido} entregador={IDEntregador} />
                </form>
            </div>
        </>
    )
}