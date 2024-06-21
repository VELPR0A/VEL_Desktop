import React from 'react';
import style from './estilo.module.css';

export default function ModalConfirmar({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className={style.modalBackdrop}>

            <dialog className={style.modalConteiner} open>

                <h2 className={style.modalTitulo}>Atribuir Pedido</h2>
                <h3 className={`${style.modalTitulo} ${style.modalSubTitulo}`}>Deseja confirmar este pedido?</h3>

                <div className={style.modalBotoes}>
                    <button type="button" className={`${style.modalBotaoEnviar} ${style.cancelar}`} onClick={onClose}>CANCELAR</button>
                    <button type="submit" className={style.modalBotaoEnviar}>CONFIRMAR</button>
                </div>

            </dialog>
        </div>
    );
};