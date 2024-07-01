import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx";
import { Container } from "./faturamento.ts";
import { React, useState, useEffect } from "react";
import formatarNumeroBR from "../../components/FormatarNumeroBR/FormatarNumeroBR.jsx";

export default function PaginaFaturamento() {
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
      const today = new Date();
      // Setando o primeiro dia da semana (domingo)
      const firstDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay())
      );
      // Setando o último dia da semana (sábado)
      const lastDayOfWeek = new Date(
        today.setDate(today.getDate() - today.getDay() + 6)
      );

      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        const itemDate = new Date(item.data);
        console.log(firstDayOfWeek, lastDayOfWeek, itemDate);
        if (itemDate >= firstDayOfWeek && itemDate <= lastDayOfWeek)
          acumulador += item.ganho;
        return acumulador;
      }, 0);
      console.log(valorTotal);
      return valorTotal;
    }
  };

  const style = {
    display: "flex",
    backgroundColor: "#ECF3FB",
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const formattedDate = `${year}-${month}`;

  return (
    <Container style={style}>
      <MenuLateral pagina="Faturamento" />
      <section className="Container">
        <div className="titulo">
          <h1>Faturamento</h1>
        </div>
        <div className="Boxes-Superior">
          <div className="FaturamentoDiário">
            <h3>Faturamento Diário</h3>
            <p>R$ {formatarNumeroBR(faturamento(0))}</p>
          </div>
          <div className="FaturamentoSemanal">
            <h3>Faturamento Semanal</h3>
            <p>R$ {formatarNumeroBR(faturamento(3))}</p>
          </div>
          <div className="FaturamentoMensal">
            <h3>Faturamento Mensal</h3>
            <p>R$ {formatarNumeroBR(faturamento(1))}</p>
          </div>
        </div>
        <div className="Quadro">
          <header>
            <input type="month" name="Data" id="IData" defaultValue={formattedDate} />
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
    </Container>
  );
}
