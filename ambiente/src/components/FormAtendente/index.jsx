import React, { useState } from 'react';
import style from './estilo.module.css';
import ModalConfirmar from '../ModalConfirmar/index';
import Http from "../../components/RequisicaoHTTP/Http"

export default function FormAtendente() {
    const [isModalConfirmarOpen, setIsModalConfirmarOpen] = useState(false);

    const enviaInformacoes = async event => {
        event.preventDefault();

        const pedido = {
            nome: document.querySelector("#nome").value,
            telefone: document.querySelector("#telefone").value,
            endereco: document.querySelector("#endereco").value,
            valor: document.querySelector("#valor").value,
            descricao: document.querySelector("#descricao").value,
            formaPagamento: Number(document.querySelector("#formaPagamento").value)
        }

        console.log(pedido)

        try{
            const response = await fetch("https://vel-tnpo.onrender.com/pedido/adicionar", Http("POST", pedido));
            const resposta = await response.json();
            console.log(resposta);
        } catch(error){
            alert("Erro em tentar se comunicar com o servidor, tente mais tarde. Se o erro persistir entre em contato.");
            console.log(error)
        } 
        setIsModalConfirmarOpen(false);
    }

    return (
        <form className={style.conteiner} onSubmit={enviaInformacoes}>

            <div className={style.modalFormConteiner}>

                <div className={style.modalFormGrupo}>

                    <div>
                        <label htmlFor='nome'>Nome do cliente:</label>
                        <input type="text" id='nome' required maxLength={100}/>
                    </div>

                    <div>
                        <label htmlFor='telefone'>Telefone:</label>
                        <input type="tel" id='telefone' required maxLength={14} />
                    </div>
                </div>

                <div className={style.modalFormGrupo}>
                    <div>
                        <label htmlFor='endereco'>Endereço:</label>
                        <input type="text" id='endereco' required maxLength={255} />
                    </div>
                </div>

                <div className={style.modalFormGrupo}>

                    <div>
                        <label htmlFor='valor'>Valor:</label>
                        <input type="number" id='valor' min={1} required maxLength={9} />
                    </div>

                    <div>
                        <label htmlFor='formaPagamento'>Forma de pagamento:</label>
                        <select name="formaPagamento" defaultValue={2} id="formaPagamento" maxLength={255} required>
                            <option value="1">Dinheiro</option>
                            <option value="2">PIX</option>
                            <option value="3">Boleto</option>
                            <option value="4">Cartão Débito</option>
                            <option value="5">Cartão Crédito</option>
                        </select>
                    </div>
                </div>

                <div className={style.modalFormGrupo}>
                    <div>
                        <label htmlFor='descricao'>Descrição do pedido:</label>
                        <textarea id='descricao'/>
                    </div>
                </div>

            </div>
            <div className={style.modalBotoes}>
                <button type="button" className={style.modalBotaoEnviar} onClick={()=>setIsModalConfirmarOpen(true)}>ENVIAR</button>
            </div>

            <ModalConfirmar isOpen={isModalConfirmarOpen} onClose={()=>setIsModalConfirmarOpen(false)} />
        </form>
    );
}
