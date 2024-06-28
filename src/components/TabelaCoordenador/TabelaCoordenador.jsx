import React, { useState, useEffect } from 'react';
import style from './estilo.module.css';
import iconePerfil from '../../assets/images/icons/iconePerfil.svg';
import ModalAddEntregador from '../ModalAddEntregador/index';
import ModalPerfilEntregador from '../ModalPerfilEntregador/index';

export default function TabelaCoordenador() {
    // Estado para controlar se o modal de adicionar/perfil entregador está aberto ou fechado
    const [isModalAddOpen, setIsModalAddOpen] = useState(false);
    const [isModalPerfilOpen, setIsModalPerfilOpen] = useState(false);
    const [selectedEntregador, setSelectedEntregador] = useState(null); // Estado para armazenar o entregador selecionado para visualização ou edição

    function handleModalAdd() {
        setIsModalAddOpen(prevState => !prevState); // Inverte o estado atual do modal de adicionar entregador (abre se estiver fechado, fecha se estiver aberto)
    }

    function handleModalPerfil(entregador) {
        setSelectedEntregador(entregador); // Define o entregador selecionado para visualização ou edição
        setIsModalPerfilOpen(prevState => !prevState); // Inverte o estado atual do modal de perfil de entregador 
    }

    const [listaEntregadores, setListaEntregadores] = useState([]);

    const fetchEntregadores = async () => {
        try {
        const requisicao = await fetch(`https://vel-tnpo.onrender.com/coordenador/${JSON.parse(localStorage.getItem("User"))}`);
        const informacoes = await requisicao.json();
        setListaEntregadores(informacoes);
        } catch (error) {
        console.log("Erro na requisição de dados", error);
        alert("Erro na requisição de dados, tente recarregar a página!");
        }
    };
    
    useEffect(() => {
        fetchEntregadores();
    }, []);

    console.log(listaEntregadores)

    return (
        <div className={style.conteiner}>
            {/* Botão para abrir o modal de adicionar entregador */}
            <button className={style.botaoAdicionar} onClick={handleModalAdd}>+ Novo Cadastro</button>
            {/* Componente ModalAddEntregador, que é exibido se isModalAddOpen for verdadeiro */}
            <ModalAddEntregador isOpen={isModalAddOpen} onClose={handleModalAdd} />
            {/* Componente ModalPerfilEntregador, que é exibido se isModalPerfilOpen for verdadeiro */}
            <ModalPerfilEntregador isOpen={isModalPerfilOpen} onClose={() => handleModalPerfil(null)} entregador={selectedEntregador} />

            <table className={style.tabelaCoordenador}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Perfil</th>
                    </tr>
                </thead>
                <tbody>
                    {listaEntregadores.map((entregador) => (
                        <tr key={entregador.idCpf}>
                            <td>{entregador.nome}</td>
                            <td>{entregador.idCpf}</td>
                            <td className={`${style.status} ${entregador.status ? style.online : style.offline}`}>
                                <div className={style.statusCor} />
                                {`${entregador.status ? "Online" : "Offline"}`}
                            </td>
                            <td>
                                <button className={style.botaoPerfil} onClick={() => handleModalPerfil(entregador)}>
                                    <img src={iconePerfil} alt="Perfil" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
