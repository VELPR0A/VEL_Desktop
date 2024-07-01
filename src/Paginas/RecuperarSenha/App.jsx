import React from 'react';
import { Container } from "./recuperacaoSenha.ts";
import GlobalStyle from "../../components/globalStyles";
import { useNavigate } from "react-router-dom";

function PaginaInicial() {
  const navigate = useNavigate();

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "0",
    backgroundColor: "#005A8D",
  }

  return (
    <Container style={style}>
      <GlobalStyle />
      <div className="container1">
        <h2>Recuperar senha</h2>
        <p>Um código será enviado para seu e-mail, coloque-o abaixo.</p>
        <form>
          <input type="email" placeholder="Coloque seu e-mail aqui" required/>
          <button onClick={() => navigate("/codigovalidacao")}>Enviar código</button>
        </form>
      </div>
    </Container>
  );
}

export default PaginaInicial;