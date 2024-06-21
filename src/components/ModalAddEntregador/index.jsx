import React from 'react';
import style from './estilo.module.css';

export default function ModalAddEntregador({ isOpen, onClose }) {
        // Se o modal não está aberto, retorna null 
    if (!isOpen) return null;

    return (
        <div className={style.modalBackdrop}>
            {/* Dialog é usado para criar um modal */}
            <dialog className={style.modalConteiner} open>

                <button className={style.modalBotaoFechar} onClick={onClose}>✖</button>

                <h2 className={style.modalPerfilTitulo}>CADASTRAR ENTREGADOR</h2>

                <form className={style.modalForm}>
                    <div className={style.modalImagemContainer}>
                        <label htmlFor='fotoPerfil'>📸</label>
                        <input type="file" id='fotoPerfil' />
                    </div>

                    <div className={style.modalFormConteiner}>

                        <div className={style.modalFormGrupo}>
                            <label htmlFor='nome'>Nome:</label>
                            <input type="text" id='nome' />
                            <label htmlFor='cpf'>CPF:</label>
                            <input type="text" id='cpf' />
                            <label htmlFor='telefone'>Telefone:</label>
                            <input type="tel" id='telefone' />
                        </div>
                        <div className={style.modalFormGrupo}>
                            <label htmlFor='email'>E-mail:</label>
                            <input type="email" id='email' />
                            <label htmlFor='contaBancaria'>Conta Bancária:</label>
                            <input type="text" id='contaBancaria' />
                            <label htmlFor='turno'>Turno:</label>
                            <input type="text" id='turno' />

                        </div>
                    </div>
                    <div className={style.modalBotoes}>
                        <button type="submit" className={style.modalBotaoEnviar}>CADASTRAR</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};