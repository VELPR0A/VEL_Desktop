import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`
  .container1 a {
    text-decoration: none;
    color: #222222;
  }

  .container1 a:hover {
    color: #f38342;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    width: 83vw;
    width: -webkit-fill-available !important;
    min-height: 100vh;
  }

  .titulo {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #005a8d;
    color: #fff;
    width: 90%;
    height: 5em;
    border-radius: 15px;
    margin: 2em 0 1em 0;
    font-size: 1.3em;
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.25);
  }

  .Quadro {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 90%;
    border-radius: 10px;
    padding: 2em;
  }

  .Modo-Escuro,
  .Notificacoes,
  .AlterarSenha,
  .Privacidade,
  .Termos,
  .Contato,
  .Idioma {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222222;
    border-bottom: 1px solid #cadbde;
    margin-bottom: 0.5em;
    padding-bottom: 0.5em;
  }

  .Sair {
    color: #222222;
  }

  .Icone-titulo {
    display: flex;
    align-items: center;
  }

  .Icone {
    padding: 0 1em 0 1em;
  }

  .Icone svg {
    font-size: 1.5em;
    color: #005a8d;
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .toggle-input {
    display: none;
  }

  .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 34px;
    border-radius: 17px;
    background-color: #ccc;
    cursor: pointer;
    transition: background-color 0.4s ease;
  }

  .toggle-label:before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease;
  }

  .toggle-input:checked + .toggle-label {
    background-color: #f38342;
  }

  .toggle-input:checked + .toggle-label:before {
    transform: translateX(26px);
  }

  .pageSelected::before {
    left: -38% !important;
  }
`;
