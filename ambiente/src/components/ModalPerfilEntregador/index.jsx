import React, { useState, useEffect } from 'react';
import style from './estilo.module.css';
import iconeAlterar from '../../assets/images/icons/iconeAlterar.svg';

export default function ModalPerfilEntregador({ isOpen, onClose, entregador }) {
    // ver ou editar - mudança de estado
    const [estado, setEstado] = useState('view');
    const [nomeEntregador, setNomeEntregador] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [contaBancaria, setContaBancaria] = useState('');
    const [turno, setTurno] = useState('');

    useEffect(() => {
        if (entregador) {
            setNomeEntregador(entregador.nome);
            setCpf(entregador.CPF);
            setTelefone(entregador.telefone);
            setEmail(entregador.email);
            setContaBancaria(entregador.contaBancaria);
            setTurno(entregador.turno);
        }
    }, [entregador]);

    function alterarEstadoParaEditar() {
        setEstado('edit');
    }

    function alterarEstadoParaVer() {
        setEstado('view');
    }

    if (!isOpen || !entregador) return null;

    return (
        <div className={style.modalPerfilBackdrop}>
            <dialog className={style.modalPerfilConteiner} open>
                <button className={style.modalPerfilBotaoFechar} onClick={onClose}>✖</button>

                <div className={`${style.modalPerfilStatusCor} ${entregador.status === 'Online' ? style.online : style.offline}`}>
                    <p>{entregador.id}</p>
                </div>

                <h2 className={style.modalPerfilTitulo}>
                    {estado === 'edit' && ('EDITAR ')}COORDENADOR
                </h2>

                {estado === 'view' ? (
                    <>
                        <div className={style.modalImagemContainer}>
                            <p>🛵</p>
                        </div>

                        <div className={style.modalPerfilInfoEntregador}>
                            <div className={style.modalPerfilGrupo}>
                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>Nome:</p>
                                    <p>{nomeEntregador}</p>
                                </div>
                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>CPF:</p>
                                    <p>{cpf}</p>
                                </div>
                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>Telefone:</p>
                                    <p>{telefone}</p>
                                </div>
                            </div>

                            <div className={style.modalPerfilGrupo}>
                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>Email:</p>
                                    <p>{email}</p>
                                </div>

                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>Conta Bancaria:</p>
                                    <p>{contaBancaria}</p>
                                </div>

                                <div className={style.modalPerfilCampo}>
                                    <p className={style.modalPerfilCampoDest}>Turno:</p>
                                    <p>{turno}</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.modalPerfilBotoes}>
                            <button type="submit" className={style.modaPerfilBotaoEnviar}>Valor a pagar: R$580,00</button>
                            <button className={style.modalPerfilBotaoAlterar} onClick={alterarEstadoParaEditar}>
                                <img src={iconeAlterar} alt="Alterar" />
                            </button>
                        </div>
                    </>
                ) : (
                    <form className={style.modalForm}>
                        <div className={style.modalImagemContainer}>
                            <label htmlFor='fotoPerfil'>✏️</label>
                            <input type="file" id='fotoPerfil' />
                        </div>

                        <div className={style.modalFormConteiner}>
                            <div className={style.modalFormGrupo}>
                                <label htmlFor='nome'>Nome:</label>
                                <input type="text" value={nomeEntregador} onChange={(e) => setNomeEntregador(e.target.value)} id='nome' />
                                <label htmlFor='cpf'>CPF:</label>
                                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id='cpf' />
                                <label htmlFor='telefone'>Telefone:</label>
                                <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} id='telefone' />
                            </div>
                            <div className={style.modalFormGrupo}>
                                <label htmlFor='email'>E-mail:</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' />
                                <label htmlFor='contaBancaria'>Conta Bancária:</label>
                                <input type="text" value={contaBancaria} onChange={(e) => setContaBancaria(e.target.value)} id='contaBancaria' />
                                <label htmlFor='turno'>Turno:</label>
                                <input type="text" value={turno} onChange={(e) => setTurno(e.target.value)} id='turno' />
                            </div>
                        </div>
                        <div className={style.modalBotoes}>
                            <button type="button" className={`${style.modalBotaoEnviar} ${style.cancelar}`} onClick={alterarEstadoParaVer}>CANCELAR</button>
                            <button type="button" className={style.modalBotaoEnviar} onClick={alterarEstadoParaVer}>SALVAR</button>
                        </div>
                    </form>
                )}
            </dialog>
        </div>
    );
}
