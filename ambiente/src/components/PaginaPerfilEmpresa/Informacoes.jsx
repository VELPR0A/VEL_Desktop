import imagem from "../../assets/images/logoExemplo.png";

export default function Informacoes (props) {
    return (
        <>
            <div className='ImagemPerfilEmpresa'>
                <img src={imagem} alt="Logo de Usuário"/>
            </div>
            <div className='NomeEmpresa'>
                <h1>{props.nomeEmpresa}</h1>
            </div>
            <div className='Colunas'>
                <div className='Coluna1'>
                    <div className='Label'>
                        <h2>Proprietário</h2>
                        <p>{props.nomeProprietario}</p>
                    </div>
                    <div className='Label'>
                        <h2>Telefone</h2>
                        <p>{props.telefone}</p>
                    </div>
                    <div className='Label'>
                        <h2>Forma de Pagamento</h2>
                        <p>{props.formaPagamento}</p>
                    </div>
                    <div className='Label'>
                        <h2>Plano</h2>
                        <p>{props.plano}</p>
                    </div>
                </div>
                <div className='Coluna2'>
                    <div className='Label'>
                        <h2>E-mail</h2>
                        <p>{props.email}</p>
                    </div>
                    <div className='Label'>
                        <h2>CNPJ</h2>
                        <p>{props.cnpj}</p>
                    </div>
                    <div className='Label'>
                        <h2>Data de Cadastro</h2>
                        <p>{props.dataCadastro}</p>
                    </div>
                </div>
            </div>
        </>
    )
}