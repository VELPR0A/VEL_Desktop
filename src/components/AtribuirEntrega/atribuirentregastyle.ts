import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`

  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    height: 100vh;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005A8D;
    color: #fff;
    width: 80%;
    border-radius: 15px;
    padding: 15px;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Conteudo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 95%;
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 30%;
    height: 100%;
    padding: 1.5em 2em;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none;
  }

  .Quadro h2 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  .Pedidos {
    display: flex;
    flex-direction: column;
    justify-content: left;
    border-bottom: 1px solid #CADBDE;
    margin-bottom: 1em;
  }

  .Pedidos h3 {
    color: #0080c0;
    font-weight: 600;
  }

  .Quadro-Input {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 32%;
    padding: 1.5em 2.5em;
    border-radius: 10px;
    height: fit-content;
  }

  .Quadro-Input h2 {
    display: flex;
    justify-content: center;
    font-size: 1.3em;
    margin-bottom: 0.6em;
  }

  .Quadro-Input label {
    font-weight: 550;
  }

  .ListaEn ul {
    width: 100%;
    list-style-type: none;
    height: 90%;
    margin-top: 10px;
    overflow-y: hidden;
  }

  .ListaEn ul li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #CADBDE;
    margin-bottom: 0.7em;
    padding-right: 0.3em;
  }

  .ListaEn ul .on::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6bdacc;
    border-radius: 50%;
  }

  .ListaEn ul .off::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2b2b36;
    border-radius: 50%;
  }

  .ListaEn ul li .EnID {
    color: #0080c0;
    font-weight: 600;
  }

  .entregador {
    font-weight: 600;
  }

  .ListaEn footer {
    display: flex;
    justify-content: center;
  }

  footer div {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    font-size: 0.8em;
  }

  footer div:first-of-type {
    border-right: 1px solid #00000017;
  }

  .online::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6bdacc;
    border-radius: 50%;
  }

  .offline::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2b2b36;
    border-radius: 50%;
  }

  .ID-Pedido,
  .ID-Entregador {
    background-color: #ECF3FB;
    border: none;
    border-radius: 10px;
    height: 40px;
    padding-left: 1em;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
  }

  .Botao {
    display: flex;
    justify-content: center;
    margin-top: 2em;
  }

  .Botao button {
    width: fit-content;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background: #005A8D;
    font-size: 1.2em;
    font-weight: 500;
    padding: 0.5em 1.5em;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 1160px){
    .Conteudo{
      
    }
  }
`;
