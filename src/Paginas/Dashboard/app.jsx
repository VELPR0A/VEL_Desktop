import React, { useEffect, useState } from 'react';
import MenuLateral from "../../components/MenuLateral/MenuLateral";
import "../../assets/styles/dashbord.css";
import Despesas from "../../components/Graficos/Despesas";
import FaturamentoMensal from "../../components/Graficos/FaturamentoMensal";
import MoneyIcon from "../../assets/images/Money.png";
import CapaceteIcon from "../../assets/images/Capacete.png";
import Metas from "../../components/Graficos/Metas";
import Http from '../../components/RequisicaoHTTP/Http';

function App() {
  const [listaEntregadores, setListaEntregadores] = useState([]);
  const [listaFaturamento, setListaFaturamento] = useState([]);
  // const [listaMetas, setlistaMetas] = useState([]);

  const fetchEntregadores = async () => {
    try {
      const requisicao = await fetch(`https://vel-tnpo.onrender.com/entregador/${JSON.parse(localStorage.getItem("User"))}`);
      const informacoes = await requisicao.json();
      setListaEntregadores(informacoes);
    } catch (error) {
      console.log("Erro na requisição de dados", error);
      alert("Erro na requisição de dados, tente recarregar a página!");
    }
  };

  const fetchFaturamento = async () => {
    try {
      const requisicao = await fetch(`https://vel-tnpo.onrender.com/faturamento/${JSON.parse(localStorage.getItem("User"))}`);
      const informacoes = await requisicao.json();
      setListaFaturamento(informacoes);
    } catch (error) {
      console.log("Erro na requisição de dados", error);
      alert("Erro na requisição de dados, tente recarregar a página!");
    }
  };

  // const fetchMetas = async () => {
  //   try {
  //     const requisicao = await fetch("http://localhost:3000/metas/");
  //     const informacoes = await requisicao.json();
  //     setlistaMetas(informacoes[0].metas);
  //   } catch (error) {
  //     console.log("Erro na requisição de dados", error);
  //     alert("Erro na requisição de dados, tente recarregar a página!");
  //   }
  // };

  useEffect(() => {
    fetchEntregadores();
    fetchFaturamento();
    // fetchMetas();
  }, []);

  const faturamento = (card) => {
    const date = new Date();

    if(card == 0){
      const todayDate = date.getDate();
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if(item.data.slice(8,10) == todayDate) acumulador += item.ganho;
        return acumulador;
      }, 0);
      return valorTotal;
    } else if(card == 1){
      const todayMonth = date.getMonth();
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if(item.data.slice(5,7) == todayMonth + 1) acumulador += item.ganho;
        return acumulador;
      }, 0);
      return valorTotal;
    } else if(card == 2){
      const valorTotal = listaFaturamento.reduce((acumulador, item) => {
        if(item.despesa) acumulador += item.despesa;
        return acumulador;
      }, 0);
      return valorTotal;
    }
  }

  const CartaoFaturamento = ({ titulo, divClasse, h2Classe, card }) => {
    return (
      <div className={divClasse}>
        <main>
          <h2>R$ <span className={h2Classe}>{faturamento(card)}</span></h2>
          <h3>{titulo}</h3>
        </main>
        <aside>
          <img src={MoneyIcon} alt="Ícone de dinheiro" />
        </aside>
      </div>
    );
  };

  const GraficoConteudo1 = ({ divClass, h2, grafico}) => {
    return (
      <div className={divClass}>
        <div className="conteudo">
          <h2>{h2}</h2>
          <h3>R$ <span>{1000}</span></h3>
          {grafico}
        </div>
      </div>
    );
  };

  const GraficoConteudo2 = ({ divClass, h2, grafico}) => {
    let despesa = listaFaturamento.map(item => item.despesa);
    despesa = despesa.reduce((acumulador, valor) => {
      if(valor) acumulador += valor;
      return acumulador; 
    }, 0);
    const date = new Date();
    const todayMonth = date.getMonth();
    const valorTotal = listaFaturamento.reduce((acumulador, item) => {
      if(item.data.slice(5,7) == todayMonth + 1) acumulador += item.ganho;
      return acumulador;
    }, 0);
    return (
      <div className={divClass}>
        <div className="conteudo">
          <h2>{h2}</h2>
          <h3>R$ <span>{despesa}</span></h3>
          <Despesas valorDespesa={despesa} valorGanho={valorTotal}/>
        </div>
      </div>
    );
  };

  const Entregador = ({ idCpf, nome, status }) => {
    return (
      <li className={status ? "on" : "off"}>
        <div>
          {nome}
          <br />
          <span className="EnID">ID: #{idCpf}</span>
        </div>
      </li>
    );
  };

  return (
    <>
      <MenuLateral pagina="Dashboard" />

      <div className="container">
        <CartaoFaturamento titulo="Faturamento Diário" divClasse="item FD" h2Classe="valorFD" card="0" />
        <CartaoFaturamento titulo="Faturamento Mensal" divClasse="item FS" h2Classe="valorFS" card="1" />
        <CartaoFaturamento titulo="Total a pagar" divClasse="item TP" h2Classe="valorTP" card="2" />

        <div className="item En">
          <main>
            <h2><span className="valorEn">{listaEntregadores.length}</span> Cadastrados</h2>
            <h3>Entregadores</h3>
          </main>
          <aside>
            <img src={CapaceteIcon} alt="Ícone de capacete" />
          </aside>
        </div>

        <GraficoConteudo1 divClass="item Graf1" h2="Metas" grafico={<FaturamentoMensal />} />
        <GraficoConteudo2 divClass="item Graf2" h2="Despesas" />

        <div className="item Graf3">
          <Metas valores={listaFaturamento} />
        </div>

        <div className="item ListaEn">
          <h2>Status dos Entregadores</h2>
          <ul>
            {listaEntregadores.map(entregador => (
              <Entregador key={entregador.idCpf} idCpf={entregador.idCpf} nome={entregador.nome} status={entregador.status} />
            ))}
          </ul>
          <footer>
            <div className="online">On-line</div>
            <div className="offline">Off-line</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;