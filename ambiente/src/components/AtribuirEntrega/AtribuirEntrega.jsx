import "../../assets/styles/AtribuirEntregas.css"
import MenuLateral from "../../components/MenuLateralAtendenteCoordenador/MenuLateral.jsx"
import ListaPedidos from "../AtribuirEntrega/ListaPedidos.jsx"
import Input from "./Input.jsx";
import { ImPlus } from "react-icons/im";
import { PiFileArrowDownDuotone } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";

const listapedidos = [
    {
        id: '#0424',
        endereco: 'R. dos Pinheiros - Pinheiros, São Paulo - SP, 08142-640'
    },
    {
        id: '#0425',
        endereco: 'R. das Laranjeiras - Jardim Gaivotas, São Paulo - SP, 04849-531'
    },
    {
        id: '#0426',
        endereco: 'R. Iguatemi - Itaim Bibi, São Paulo - SP, 01451-011'
    },
    {
        id: '#0427',
        endereco: 'R. Guaicurus - Lapa, São Paulo - SP, 05033-000'
    },
    {
        id: '#0428',
        endereco: 'Av. Cruzeiro do Sul - Santana, São Paulo - SP, 02030-100'
    },
    {
        id: '#0429',
        endereco: 'Av. Braz Leme - Santana, São Paulo - SP, 02022-011'
    }
];

export default function AtribuirEntrega(){

    return(    
        <>
            <main className="TelaAtribuirEntrega">
                <MenuLateral pagina="Coordenadores" />
                    <section className="Container">
                        <div className="titulo">
                            <h1>Atribuir Entrega</h1>
                        </div>
                        <div className="Conteudo">
                            <div className="Quadro">
                                <h2>Lista de Pedidos</h2>
                                {
                                    listapedidos.map((pedido) => {
                                        return <ListaPedidos key={pedido.id} id={pedido.id} endereco={pedido.endereco} />
                                    })
                                }
                            </div>
                            <div className="Quadro">
                                <div className="item ListaEn">
                                    <h2>Status dos Entregadores</h2>
                                    <ul>
                                        <li className="on">
                                        <div className="entregador">
                                            Amélia Fagundes
                                            <br />
                                            <span className="EnID">ID: #001</span>
                                        </div>
                                        </li>
                                        <li className="on">
                                        <div className="entregador">
                                            Paula Ribeiro
                                            <br />
                                            <span className="EnID">ID: #002</span>
                                        </div>
                                        </li>
                                        <li className="off">
                                        <div className="entregador">
                                            Leonardo Magalhães
                                            <br />
                                            <span className="EnID">ID: #003</span>
                                        </div>
                                        </li>
                                        <li className="off">
                                        <div className="entregador">
                                            Giovane Chaves
                                            <br />
                                            <span className="EnID">ID: #004</span>
                                        </div>
                                        </li>
                                        <li className="on">
                                        <div className="entregador">
                                            Vanda Santana
                                            <br />
                                            <span className="EnID">ID: #005</span>
                                        </div>
                                        </li>
                                        <li className="on">
                                        <div className="entregador">
                                            Francisco Nogueira
                                            <br />
                                            <span className="EnID">ID: #006</span>
                                        </div>
                                        </li>
                                        <li className="off">
                                        <div className="entregador">
                                            Rita Pinheiro
                                            <br />
                                            <span className="EnID">ID: #007</span>
                                        </div>
                                        </li>
                                        <li className="off">
                                        <div className="entregador">
                                            Milton Alvarez
                                            <br />
                                            <span className="EnID">ID: #008</span>
                                        </div>
                                        </li>
                                    </ul>
                                    <footer>
                                        <div className="online">On-line</div>
                                        <div className="offline">Off-line</div>
                                    </footer>
                                    </div>
                            </div>
                            <div className="Quadro-Input">
                                <h2>Atribuir Entrega</h2>
                                <Input />
                            </div>
                        </div>
                    </section>
            </main>
        {/* <main className="TelaContratosEmpresa">
            
                    <div className="Quadro">
                        <div className="Superior">
                            <h2>Meus Contratos</h2>
                            <button className="Botao-NovoContrato">
                                <ImPlus />
                                <p>Novo Contrato</p>
                            </button>
                        </div>
                        <div className="Botoes">
                            <button className="Botao-Empresa">Empresa</button>
                            <a href="../pages/paginaContratosEntregador.html">
                                <button className="Botao-Entregador">Entregador</button>
                            </a>
                        </div>
                        <div className="Titulo-Tabela">
                            <h3>ID</h3>
                            <h3>Cliente</h3>
                            <h3>Ver</h3>
                        </div>
                        <section className="Tabela">
                            <div className="Dados">
                                <p>01</p>
                                <div className="Cliente">
                                    <p>Restaurante da Cida</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <p>02</p>
                                <div className="Cliente">
                                    <p>Restaurante La Luna Culinária</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <p>03</p>
                                <div className="Cliente">
                                    <p>Restaurante Chefs Garden</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <p>04</p>
                                <div className="Cliente">
                                    <p>LeveMoto Dom Casmurro</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <p>05</p>
                                <div className="Cliente">
                                    <p>Restaurante Quincas Borba</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <p>06</p>
                                <div className="Cliente">
                                    <p>Living MotoClube</p>
                                </div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
        </main> */}
        </> 
    )
}