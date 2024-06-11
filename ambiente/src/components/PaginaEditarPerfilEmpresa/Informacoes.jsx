import imagem from "../../assets/images/logoExemplo.png";

export default function EditarInformacoes (props) {
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
                    <div className='Formulario'>
                        <form>
                            <div className="Proprietario">
                                <label className="Titulo-Form">Proprietário</label>
                                <input type="text" placeholder="Insira o nome do proprietário"/>
                            </div>
                            <div className="Telefone">
                                <label className="Titulo-Form">Telefone</label>
                                <input type="text" placeholder="Insira um nome de telefone"/>
                            </div>
                            <div className="FormadePagamento">
                                <h2>Forma de Pagamento</h2>
                                <select name="" id="">
                                    <option>Cartão de Crédito</option>
                                    <option>Pix</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className='Label'>
                        <h2>Plano</h2>
                        <p>{props.plano}</p>
                    </div>
                </div>
                <div className='Coluna2'>
                    <div className='Formulario'>
                        <form>
                            <div className="Email">
                                <label className="Titulo-Form">E-mail</label>
                                <input type="email" placeholder="Insira um E-mail"/>
                            </div>
                        </form>
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
            <div className="Botao">
                <a href="../pages/paginaPerfilEmpresa.html">
                    <button className="Botao-Salvar" type="submit">Salvar</button>
                </a>
            </div>
        </>
    )
}