import React from 'react';
import './paginaInicial.css';

function PaginaInicial() {

  return (
   <div className="container">
            <div className="nav-bar">
                <nav>
                    <div className="logo"></div>
                    <ul className="ul">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Nossos Planos</a></li>
                        <li><a href="../../../pages/paginaLogin.html"><button className='Login'>Login</button></a></li>
                        <button className='Cadastro'>Começe Agora<div className="arrow-wrapper"> <div className="arrow"></div></div></button>
                    </ul>
                </nav>
            </div>

              <div className='Video'>
                <div className='conteudo'>
                  <h1>Simplificando a gestão <br></br> de entregas para você</h1>
                  <h2>Descubra o segredo para entregas mais <br></br> eficientes e lucrativas!</h2>
                  <a href="#"><button className='torneProdutividade'>Torne sua produtividade 3X maior</button></a>
                </div>
              </div>
              

              
            

            <div className='Frase'>
              <h1>DIGA ADEUS AS COMANDAS DE PAPEL!</h1>

              <p>Com a Virtual Easy Log, você digitaliza seus pedidos e elimina a necessidade <br></br> de impressões. Isso significa menos papel, menos custos e um ambiente<br></br> mais sustentável.</p>
            </div>

            <div className="solution-description">
                <h1 className='simplificando'>Simplificando Sua Gestão de Entregas</h1>

                <div className='um'>

                  <div className='imgNotebook'></div>

                  <div className='dois'>
                    <h2>A Solução Completa para <span className="highlight">Restaurantes</span> e <br></br> <span className="highlight">Empresas de Motoboys</span></h2>
                    <p>
                      Diga adeus às complicações da gestão de entregas e adote uma plataforma que transforma a relação entre restaurantes,
                      empresas de motoboys e seus entregadores. Desenvolvida para proporcionar eficiência, transparência e segurança,
                      nossa solução digital oferece uma visão integrada de todo o seu fluxo de trabalho e finanças, tudo em um só lugar.
                    </p>
                    <p>
                      Deixe as planilhas no passado e venha para o futuro da gestão de entregas, com toda a praticidade e confiabilidade
                      que você precisa para levar seu negócio ao próximo nível.
                    </p>
                  </div>

                </div>
            </div>

            <div className='Funcionalidades'>
              <h1>Temos como Funcionalidades</h1>

              <div className='Func'>
                <div className='facilUsabilidade'>
                <div className='usabilidade'></div>
                <p>FÁCIL <br></br> USABILIDADE</p>
                </div>

                <div className='gestaoSimplificada'>
                  <div className='gestao'></div>
                  <p>GESTÃO <br></br> SIMPLIFICADA</p>
                </div>

                <div className='gerenciamentoComandas'>
                  <div className='Comandas'></div>
                  <p>GERENCIAMENTO DE <br></br> COMANDAS DIGITAIS</p>
                </div>

                <div className='Financeiro'>
                  <div className='educacao'></div>
                  <p>ACESSO A ED.FINANCEIRA <br></br> PARA ENTREGADORES</p>
                </div>
              </div>
            </div>

            <div className='NossosPlanos'>

              <h1>Temos o plano perfeito para sua empresa!</h1>
              <p>Comece agora a simplificar a gestão de sua empresa</p>

              <div className='TiposPlanos'>

                <div className='Desperte'>
                  <h2 className='tituloCard'>Desperte</h2>
                  <p className='conteudoPlano'> Acesso a toda nossa plataforma e cadastre até 10 entregadores</p>
                  <p className="precoVelho">R$ 149,90</p>
                  <p className="precoNovo">R$ 119,90/mês</p>
                  <button className="buttonCard">Comece grátis</button>
                </div>

                <div className='Desperte'>
                  <h2 className='tituloCard'>Conquiste</h2>
                  <p className='conteudoPlano'> Acesso a toda nossa plataforma e cadastre até 30 entregadores</p>
                  <p className="precoVelho">R$ 279,90</p>
                  <p className="precoNovo">R$ 219,90/mês</p>
                  <button className="buttonCard">Comece grátis</button>
                </div>

                <div className='Desperte'>
                  <h2 className='tituloCard'>Domine</h2>
                  <p className='conteudoPlano'> Acesso a toda nossa plataforma e cadastre até 60 entregadores</p>
                  <p className="precoVelho">R$ 339,90</p>
                  <p className="precoNovo">R$ 269,90/mês</p>
                  <button className="buttonCard">Comece grátis</button>
                </div>

                <div className='Desperte'>
                  <h2 className='tituloCard'>Tranforme</h2>
                  <p className='conteudoPlano'> Acesso a toda nossa plataforma e cadastro ilimitado de entregadores </p>
                  <p className="precoVelho">R$ 669,90</p>
                  <p className="precoNovo">R$ 539,90/mês</p>
                  <button className="buttonCard">Comece grátis</button>
                </div>
                </div>

            </div>


            <footer className="footer">
      <div className="footer-section">
        <h3>Virtual Easy Log</h3>
        <ul>
          <li><a href="#">© Wallet 2022</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Cookies policy</a></li>
          <li><a href="#">Terms of use</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contatos</h3>
        <p>Instagram: VirtualEasyLog</p>
        <p>Linkedin: Virtual Easy Log</p>
        <p>Email: virtualeasylog@gmail.com</p>
      </div>
    </footer>

            

    </div>
  );
}

export default PaginaInicial;