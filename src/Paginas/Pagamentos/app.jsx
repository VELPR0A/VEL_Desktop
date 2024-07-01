import { React, useState, useEffect } from "react";
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import capacete from "../../assets/images/Helmet.png";
import formatarNumeroBR from "../../components/FormatarNumeroBR/FormatarNumeroBR.jsx";
import { Container } from "./pagamentos.ts";
import GlobalStyle from "../../components/globalStyles";

function App() {
  const [listaEntregadores, setListaEntregadores] = useState([]);
  const [listaFaturamento, setListaFaturamento] = useState([]);

  const fetchEntregadores = async () => {
    try {
      const requisicao = await fetch(
        `https://vel-tnpo.onrender.com/entregador/${JSON.parse(
          localStorage.getItem("User")
        )}`
      );
      const informacoes = await requisicao.json();
      setListaEntregadores(informacoes);
    } catch (error) {
      console.log("Erro na requisição de dados", error);
      alert("Erro na requisição de dados, tente recarregar a página!");
    }
  };

  const fetchFaturamento = async () => {
    try {
      const requisicao = await fetch(
        `https://vel-tnpo.onrender.com/faturamento/${JSON.parse(
          localStorage.getItem("User")
        )}`
      );
      const informacoes = await requisicao.json();
      setListaFaturamento(informacoes);
    } catch (error) {
      console.log("Erro na requisição de dados", error);
      alert("Erro na requisição de dados, tente recarregar a página!");
    }
  };

  useEffect(() => {
    fetchEntregadores();
    fetchFaturamento();
  }, []);

  const faturamento = (escolha) => {
    const date = new Date();

    if (escolha == 0) {
      const todayDate = date.getDate();
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if (item.data.slice(8, 10) == todayDate) acumulador += item.ganho;
        return acumulador;
      }, 0);
      return valorTotal;
    } else if (escolha == 1) {
      const todayMonth = date.getMonth();
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if (item.data.slice(5, 7) == todayMonth + 1) acumulador += item.ganho;
        return acumulador;
      }, 0);
      return valorTotal;
    } else if (escolha == 2) {
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if (item.despesa) acumulador += item.despesa;
        return acumulador;
      }, 0);
      return valorTotal;
    } else if (escolha == 3) {
      const oneDay = 24 * 60 * 60 * 1000;
      const today = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
      const firstDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay() + 1)
      );
      const lastDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay() + 7)
      );

      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        const itemDate = new Date(item.data);
        if (itemDate >= firstDayOfWeek && itemDate <= lastDayOfWeek)
          acumulador += item.ganho;
        return acumulador;
      }, 0);

      return valorTotal;
    }
  };

  const Header = ({ titulo }) => {
    return <h1>{titulo}</h1>;
  };

  const Bloco = ({ titulo, escolha }) => {
    return (
      <div>
        <h2>{titulo}</h2>
        <p>R$ {formatarNumeroBR(faturamento(escolha))}</p>
      </div>
    );
  };

  const exibirInfo = () => {
    const Card = document.querySelector("#card");
    const CardBackground = document.querySelector("#cardBackground");

    if (!Card.classList.contains("ativado")) {
      Card.classList.add("ativado");
      CardBackground.classList.add("ativado");
    } else {
      Card.classList.remove("ativado");
      CardBackground.classList.remove("ativado");
    }
  };

  const Registro = ({ nome, id, dataPag, valor }) => {
    return (
      <li>
        <span
          style={{ cursor: "pointer" }}
          className="Nome"
          onClick={exibirInfo}
        >
          {nome}
        </span>
        <span className="Id">{id}</span>
        <span className="DataPag">{dataPag}</span>
        <span className="Valor">R$ {formatarNumeroBR(valor)}</span>
      </li>
    );
  };

  const RegistroEntregador = ({ nome, idEntrega, valor, endereco }) => {
    return (
      <li>
        <img src={capacete} alt="Icone capacete" />
        <div>
          <h3>
            Cliente: {nome} <span className="idEntrega">{idEntrega}</span>
          </h3>
          <p>{endereco}</p>
        </div>
        <p>R$ {valor}</p>
      </li>
    );
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}-${month}`;

  console.log(listaEntregadores);

  const style = {
    display: "flex",
    backgroundColor: "#ecf3fb",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  };

  return (
    <Container style={style}>
      <GlobalStyle />
      <div id="cardBackground" className="ativado"></div>
      <div id="card" className="ativado">
        <h2>Relatório de Entrega</h2>
        <div>
          <h3>Valor Total</h3>
          <p>
            R$ <span className="valorEntrega">539,00</span>
          </p>
        </div>
        <div>
          <p>
            Entregador:{" "}
            <span className="entregador">Jefferoson Souza Silva</span>
          </p>
          <p>
            Data: <span className="date">15/04/2024</span>
          </p>
        </div>
        <RegistroEntregador
          nome="José Ronaldo"
          idEntrega="#1000"
          valor="50"
          endereco="R. dos Pinheiros - Pinheiros, São Paulo - SP, 081142-640"
        />
        <button onClick={exibirInfo}>Voltar</button>
      </div>
      <MenuLateral pagina="Pagamentos" />
      <section>
        <Header titulo="Pagamentos" />
        <div id="itens">
          <Bloco titulo="Faturamento Diário" escolha={0} />
          <Bloco titulo="Faturamento Semanal" escolha={3} />
          <Bloco titulo="Faturamento Mensal" escolha={1} />
        </div>
        <div id="tabela">
          <header>
            <input type="month" defaultValue={formattedDate} name="Data" id="IData" />
          </header>
          <main>
            <header>
              <h3 className="Nome">Nome</h3>
              <h3 className="Id">ID</h3>
              <h3 className="DataPag">Data de Pagamento</h3>
              <h3 className="Valor">Valor</h3>
            </header>
            <ul>
              <Registro
                nome="Jefferoson Souza Silva"
                id="#0001"
                dataPag="20/04/2024"
                valor="530"
              />
              <Registro
                nome="Antônio Carlos"
                id="#0002"
                dataPag="22/04/2024"
                valor="700"
              />
            </ul>
          </main>
        </div>
      </section>
    </Container>
  );
}

export default App;
