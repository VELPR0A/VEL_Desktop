import "../../assets/styles/PaginaContratosEmpresa.css"
import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx"
import { ImPlus } from "react-icons/im";
import { PiFileArrowDownDuotone } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";

export default function PaginaContratosEmpresa(){
    return(
        <>
        <main className="TelaContratosEmpresa">
            <MenuLateral pagina="Contrato" />
                <section className="Container">
                    <div className="titulo">
                        <h1>Contratos</h1>
                    </div>
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
        </main>
        </>
    )
}