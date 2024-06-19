import MenuLateral from "../../components/MenuLateral/MenuLateral";
import "../../assets/styles/pagamentos.css";
import capacete from "../../assets/images/Helmet.png"
import Http from '../../components/RequisicaoHTTP/Http';

function App() {
    const informacoes = async date => {
        try{
          const user = localStorage.getItem("User");
          user.data = date;
          const requisição = await fetch("<URL AQUI>", Http("POST", user));
          if(response.status >= 200 || response.status <= 399){
            const informacoes = await requisição.json();
            console.log(informacoes);
          } else {
              throw new Error(`ERROR ${response.status}`);
          }
    
        } catch(error){
          console.log(error);
          return alert("Erro na requisição de dados, tente recarregar a página!")
        }
    }

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
    };

    const exibirInfo = () => {
        const Card = document.querySelector("#card");
        const CardBackground = document.querySelector("#cardBackground");

        if(!Card.classList.contains("ativado")){
            Card.classList.add("ativado");
            CardBackground.classList.add("ativado");
        } else {
            Card.classList.remove("ativado");
            CardBackground.classList.remove("ativado");    
        }

    };

    const Registro = ({nome, id, dataPag, valor}) => {
        return (
            <li>
                <span style={{cursor: "pointer"}} className="Nome" onClick={exibirInfo}>{nome}</span>
                <span className="Id">{id}</span>
                <span className="DataPag">{dataPag}</span>
                <span className="Valor">R$ {valor},00</span>
            </li>
        );
    }

    const RegistroEntregador = ({nome, idEntrega, valor, endereco}) => {
        return (
            <li>
                <img src={capacete} alt="Icone capacete" /> 
                <div>
                    <h3>Cliente: {nome} <span className="idEntrega">{idEntrega}</span></h3>
                    <p>{endereco}</p>
                </div>
                <p>R$ {valor}</p>
            </li>
        );    
    }

    return (
        <>
        <div id="cardBackground" className="ativado"></div>
            <div id="card" className="ativado">
                <h2>Relatório de Entrega</h2>
                <div>
                    <h3>Valor Total</h3>
                    <p>R$ <span className="valorEntrega">539,00</span></p>
                </div>
                <div>
                    <p>Entregador: <span className="entregador">Jefferoson Souza Silva</span></p>
                    <p>Data: <span className="date">15/04/2024</span></p>
                </div>
                <RegistroEntregador nome="José Ronaldo" idEntrega="#1000" valor="50" endereco="R. dos Pinheiros - Pinheiros, São Paulo - SP, 081142-640" />
                <button onClick={exibirInfo}>Voltar</button>
            </div>
            <MenuLateral pagina="Pagamentos" />
            <section>
                <Header titulo="Pagamentos" />
                <div id="itens">
                    <Bloco titulo="Faturamento Diário" valor="1.230" />
                    <Bloco titulo="Faturamento Semanal" valor="4.125" />
                    <Bloco titulo="Faturamento Mensal" valor="12.000" />
                </div>
                <div id="tabela">
                    <header>
                        <input type="month" name="Data" id="IData" />
                    </header>
                    <main>
                        <header>
                            <h3 className="Nome">Nome</h3>
                            <h3 className="Id">ID</h3>
                            <h3 className="DataPag">Data de Pagamento</h3>
                            <h3 className="Valor">Valor</h3>
                        </header>
                        <ul>
                            <Registro nome="Jefferoson Souza Silva" id="#0001" dataPag="20/04/2024" valor="530" />
                            <Registro nome="Antônio Carlos" id="#0002" dataPag="22/04/2024" valor="700" />
                        </ul>
                    </main>
                </div>
            </section>
        </>
    )
}

export default App;