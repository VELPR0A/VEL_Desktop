import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx"
import { Container } from "./faturamento.ts";

export default function PaginaFaturamento(){
    const style = {
        display: "flex",
        backgroundColor: "#ECF3FB",
    }

    return(
        <Container style={style}>
            <MenuLateral pagina="Faturamento" />
            <section className="Container">
                <div className="titulo">
                    <h1>Faturamento</h1>
                </div>
                <div className="Boxes-Superior">
                    <div className="FaturamentoDiário">
                        <h3>Faturamento Diário</h3>
                        <p>R$ 1.230,00</p>
                    </div>
                    <div className="FaturamentoSemanal">
                        <h3>Faturamento Semanal</h3>
                        <p>R$ 4.125,00</p>
                    </div>
                    <div className="FaturamentoMensal">
                        <h3>Faturamento Mensal</h3>
                        <p>R$ 12.000,00</p>
                    </div>
                </div>
                <div className="Quadro">
                    <header>
                        <input type="month" name="Data" id="IData" />
                    </header>
                    <div className="Titulo-Tabela">
                    <div className="Nome">
                        <h3>Nome</h3>
                    </div>
                    <div className="ID">
                        <h3>ID</h3>
                    </div>
                    <div className="Data">
                        <h3>Data de Pagamento</h3>
                    </div>
                    <div className="Valor">
                        <h3>Valor</h3>
                    </div>
                    </div>
                    <section className="Tabela">
                        <div className="Dados">
                            <div className="Nome">
                                <p>Pedido Wesley silva</p>
                            </div>
                            <div className="ID">
                                <p>#0423</p>
                            </div>
                            <div className="Data">
                                <p>20/04/2024</p>
                            </div>
                            <div className="Valor">
                                <p>R$ 53,00</p>
                            </div>
                        </div>
                        <div className="Dados">
                            <div className="Nome">
                                <p>Coordenador Antonio Carlos</p>
                            </div>
                            <div className="ID">
                                <p>#0002</p>
                            </div>
                            <div className="Data">
                                <p>22/04/2024</p>
                            </div>
                            <div className="ValorNegativo">
                                <p>R$ 700,00</p>
                            </div>
                        </div>
                        <div className="Dados">
                            <div className="Nome">
                                <p>Pedido Maria</p>
                            </div>
                            <div className="ID">
                                <p>#0424</p>
                            </div>
                            <div className="Data">
                                <p>27/04/2024</p>
                            </div>
                            <div className="Valor">
                                <p>R$ 90,00</p>
                            </div>
                        </div>
                        <div className="Dados">
                            <div className="Nome">
                                <p>Pedido Vanessa</p>
                            </div>
                            <div className="ID">
                                <p>#0425</p>
                            </div>
                            <div className="Data">
                                <p>29/04/2024</p>
                            </div>
                            <div className="Valor">
                                <p>R$ 40,00</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="Boxes-Inferior">
                    <div className="Despesas">
                        <h3>Despesas</h3>
                        <p>R$ 1.510,00</p>
                    </div>
                    <div className="Receitas">
                        <h3>Receitas</h3>
                        <p>R$ 13.510,00</p>
                    </div>
                </div>
            </section>
        </ Container>
    )
}