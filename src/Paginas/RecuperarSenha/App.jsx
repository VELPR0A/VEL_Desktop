import React from 'react';
import './recuperacaoSenha.css';

function PaginaInicial() {
  return (
    <div className="container">
          <h2>Recuperar senha</h2>
          <p>Um código será enviado para seu e-mail, coloque-o abaixo.</p>
          <form>
            <input type="email" placeholder="Coloque seu e-mail aqui"/>
            <button type="submit">Enviar código</button>
          </form>
    </div>
  );
}

export default PaginaInicial;