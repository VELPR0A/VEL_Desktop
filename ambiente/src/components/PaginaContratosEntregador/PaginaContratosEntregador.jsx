import "../../assets/styles/PaginaContratosEntregador.css"
import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx"
import { ImPlus } from "react-icons/im";
import { PiFileArrowDownDuotone } from "react-icons/pi";
import { IoMdEye } from "react-icons/io";

export default function PaginaContratosEmpresa(){
    return(
        <>
        <main className="TelaContratosEmpresa">
            <MenuLateral />
                <section className="Container">
                    <div className="titulo">
                        <h1>Contratos</h1>
                    </div>
                    <div className="Quadro">
                        <div className="Superior">
                            <h2>Meus Contratos</h2>
                            <button className="Botao-NovoContrato">
                                <ImPlus />
                                <p>Novo Cadastro</p>
                            </button>
                        </div>
                        <div className="Botoes">
                            <a href="../pages/paginaContratosEmpresa.html">
                                <button className="Botao-Empresa">Empresa</button>
                            </a>
                            <button className="Botao-Entregador">Entregador</button>
                        </div>
                        <div className="Titulo-Tabela">
                            <div className="ID"><h3>ID</h3></div>
                            <div className="Cliente"><h3>Cliente</h3></div>
                            <div className="ID-Empresa"><h3>ID Empresa</h3></div>
                            <h3>Ver</h3>
                        </div>
                        <section className="Tabela">
                            <div className="Dados">
                                <div className="ID"><p>1001</p></div>
                                <div className="Cliente"><p>Doubly Souza Silva</p></div>
                                <div className="ID-Empresa"><p>01</p></div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <div className="ID"><p>1002</p></div>
                                <div className="Cliente"><p>Don Carlos</p></div>
                                <div className="ID-Empresa"><p>06</p></div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <div className="ID"><p>1003</p></div>
                                <div className="Cliente"><p>Jefferson Souza Silva</p></div>
                                <div className="ID-Empresa"><p>03</p></div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <div className="ID"><p>1004</p></div>
                                <div className="Cliente"><p>Douglas dos Santos</p></div>
                                <div className="ID-Empresa"><p>03</p></div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <div className="ID"><p>1005</p></div>
                                <div className="Cliente"><p>Loney Silva</p></div>
                                <div className="ID-Empresa"><p>03</p></div>
                                <div className="Icones">
                                    <PiFileArrowDownDuotone />
                                    <IoMdEye />
                                </div>
                            </div>
                            <div className="Dados">
                                <div className="ID"><p>1006</p></div>
                                <div className="Cliente"><p>André Costa</p></div>
                                <div className="ID-Empresa"><p>05</p></div>
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