import React, { useState } from 'react';
import style from './estilo.module.css';
import iconePerfil from '../../assets/images/icons/ShareIcon.png';
import ModalAddEntregador from '../ModalAddEntregador/index';
import ModalPerfilEntregador from '../ModalPerfilEntregador/index';

const entregadores = [
    {
        id: '#0030',
        nome: 'Marcos Reynald',
        status: 'Offline',
        CPF: '123.456.789-01',
        telefone: '(11) 91234-5678',
        email: 'marcos.reynald@gmail.com',
        contaBancaria: '56789-0',
        turno: 'Manhã'
    },
    {
        id: '#0031',
        nome: 'Patrick London',
        status: 'Online',
        CPF: '234.567.890-12',
        telefone: '(11) 92345-6789',
        email: 'patrick.london@gmail.com',
        contaBancaria: '67890-1',
        turno: 'Tarde'
    },
    {
        id: '#0032',
        nome: 'Antônio Carlos',
        status: 'Offline',
        CPF: '345.678.901-23',
        telefone: '(11) 93456-7890',
        email: 'antonio.carlos@gmail.com',
        contaBancaria: '78901-2',
        turno: 'Noite'
    },
    {
        id: '#0033',
        nome: 'César Casmurro',
        status: 'Offline',
        CPF: '456.789.012-34',
        telefone: '(11) 94567-8901',
        email: 'cesar.casmurro@gmail.com',
        contaBancaria: '89012-3',
        turno: 'Manhã'
    },
    {
        id: '#0034',
        nome: 'Manuel Clayton',
        status: 'Online',
        CPF: '567.890.123-45',
        telefone: '(11) 95678-9012',
        email: 'manuel.clayton@gmail.com',
        contaBancaria: '90123-4',
        turno: 'Tarde'
    },
    {
        id: '#0035',
        nome: 'Rafael Ravi',
        status: 'Online',
        CPF: '678.901.234-56',
        telefone: '(11) 96789-0123',
        email: 'rafael.ravi@gmail.com',
        contaBancaria: '01234-5',
        turno: 'Noite'
    },
    {
        id: '#0036',
        nome: 'Amélia Rodrigues',
        status: 'Online',
        CPF: '789.012.345-67',
        telefone: '(11) 97890-1234',
        email: 'amelia.rodrigues@gmail.com',
        contaBancaria: '12345-6',
        turno: 'Manhã'
    }
];


export default function TabelaEntregador() {
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
                    {entregadores.map((entregador) => (
                        <tr key={entregador.id}>
                            <td>{entregador.nome}</td>
                            <td>{entregador.id}</td>
                            <td className={`${style.status} ${entregador.status === 'Online' ? style.online : style.offline}`}>
                                <div className={style.statusCor} />
                                {entregador.status}
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
