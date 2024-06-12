import MenuLateral from "../../components/MenuLateral/MenuLateral";
import "../../assets/styles/pagamentos.css";

function App() {
    const Header = ({titulo}) => {
        return <h1>{titulo}</h1>;
    }

    const Bloco = ({titulo, valor}) => {
        return (
            <div>
                <h2>{titulo}</h2>
                <p>R$ {valor},00</p>
            </div>
        );
    }

    const Registro = ({nome, id, dataPag, valor}) => {
        return (
            <li>
                <span className="nome">{nome}</span>
                <span className="id">{id}</span>
                <span className="dataPag">{dataPag}</span>
                <span className="valor">R$ {valor},00</span>
            </li>
        );
    }

    return (
        <>
            <MenuLateral pagina="Dashboard" />
            <aside>
                <Header titulo="Pagamentos" />
                <div id="itens">
                    <Bloco titulo="Faturamento Diário" valor="1.230" />
                    <Bloco titulo="Faturamento Semanal" valor="4.125" />
                    <Bloco titulo="Faturamento Mensal" valor="12.000" />
                </div>
                <div id="tabela">
                    <header>
                        <label htmlFor="IData">Abril</label>
                        <input type="month" name="Data" id="IData" />
                    </header>
                    <main>
                        <header>
                            <h3>Nome</h3>
                            <h3>ID</h3>
                            <h3>Data de Pagamento</h3>
                            <h3>Valor</h3>
                        </header>
                        <ul>
                            <Registro nome="Jefferoson Souza Silva" id="#0001" dataPag="20/04/2024" valor="530" />
                            <Registro nome="Antônio Carlos" id="#0002" dataPag="22/04/2024" valor="700" />
                        </ul>
                    </main>
                </div>
            </aside>
        </>
    )
}

export default App;