import React, { useState } from 'react';
import style from './estilo.module.css';
import ModalConfirmar from '../ModalConfirmar/index';

export default function FormAtendente() {
    const [isModalConfirmarOpen, setIsModalConfirmarOpen] = useState(false);

    return (
        <form className={style.conteiner}>

            <div className={style.modalFormConteiner}>

                <div className={style.modalFormGrupo}>

                    <div>
                        <label htmlFor='nome'>Nome do cliente:</label>
                        <input type="text" id='nome' />
                    </div>

                    <div>
                        <label htmlFor='telefone'>Telefone:</label>
                        <input type="tel" id='telefone' />
                    </div>
                </div>

                <div className={style.modalFormGrupo}>
                    <div>
                        <label htmlFor='endereço'>Endereço:</label>
                        <input type="text" id='endereço' />
                    </div>
                </div>

                <div className={style.modalFormGrupo}>

                    <div>
                        <label htmlFor='valor'>Valor:</label>
                        <input type="text" id='valor' />
                    </div>

                    <div>
                        <label htmlFor='formaPagamento'>Forma de pagamento:</label>
                        {/* <input type="text" id='formaPagamento' /> */}
                        <select name="formaPagamento" id="formaPagamento">
                            <option value="" selected disabled></option>
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
                        <textarea id='endereço'/>
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
