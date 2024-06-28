import React from 'react';
import style from './estilo.module.css';
import Http from "../RequisicaoHTTP/Http";
export default function ModalAddEntregador({ isOpen, onClose }) {
        // Se o modal não está aberto, retorna null 
    if (!isOpen) return null;

    const enviarDados = event => {
        event.preventDefault();

        const newUser = {
            idCnpj: JSON.parse(localStorage.getItem("User")),
            nome: document.querySelector("#nome").value,
            idCpf: document.querySelector("#cpf").value,
            telefone: document.querySelector("#telefone").value,
            email: document.querySelector("#email").value,
            contaBancaria: document.querySelector("#contaBancaria").value,
            turno: document.querySelector("#turno").value,
        }

        console.log(newUser)
        enviaEntregadores(Http("POST", newUser));
    }

    const enviaEntregadores = async (dados) => {
        try {
            const requisicao = await fetch("https://vel-tnpo.onrender.com/entregador/adicionar", dados);
            console.log(requisicao);
            if(requisicao.status > 199 && requisicao.status < 399){
                console.log(requisicao)
                alert("Usuário cadastrado com sucesso!")
            } else{
                alert("Entregador cadastrado com sucesso!")
                throw new Error(requisicao.status);
            }
        } catch (error) {
            console.log(error);
            alert("Erro ao cadastrar usuário.");
        }
    };

    return (
        <div className={style.modalBackdrop}>
            {/* Dialog é usado para criar um modal */}
            <dialog className={style.modalConteiner} open>

                <button className={style.modalBotaoFechar} onClick={onClose}>✖</button>

                <h2 className={style.modalPerfilTitulo}>CADASTRAR ENTREGADOR</h2>

                <form className={style.modalForm} onSubmit={enviarDados}>
                    <div className={style.modalImagemContainer}>
                        <label htmlFor='fotoPerfil'>📸</label>
                        <input type="file" id='fotoPerfil' />
                    </div>

                    <div className={style.modalFormConteiner}>

                        <div className={style.modalFormGrupo}>
                            <label htmlFor='nome'>Nome:</label>
                            <input required type="text" id='nome' />
                            <label htmlFor='cpf'>CPF:</label>
                            <input required type="text" minLength={11} maxLength={14} id='cpf' />
                            <label htmlFor='telefone'>Telefone:</label>
                            <input required type="tel" id='telefone' />
                        </div>
                        <div className={style.modalFormGrupo}>
                            <label htmlFor='email'>E-mail:</label>
                            <input required type="email" id='email' />
                            <label htmlFor='contaBancaria'>Conta Bancária:</label>
                            <input required type="text" id='contaBancaria' />
                            <label htmlFor='turno'>Turno:</label>
                            <select name="turno" id="turno">
                                <option value="1">Manhã</option>
                                <option value="2">Tarde</option>
                                <option value="3">Noite</option>
                            </select>
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