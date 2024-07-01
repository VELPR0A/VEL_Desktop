import React from "react";
import { useNavigate } from "react-router-dom";
import CelularImg from "../../assets/images/Celular.png";
import ProfileImg from "../../assets/images/Perfil.png";
import { FaStar } from "react-icons/fa";
import LogoVEL from "../../assets/images/VEL.png";
import English from "../../assets/images/En.png";
import linkedinIcon from "../../assets/images/icons/Linkedin.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import githubIcon from "../../assets/images/icons/Github.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import { Container } from "./styledContainer";
import GlobalStyle from "../../components/globalStyles";

function PaginaInicial() {
  const navigate = useNavigate();

  const scrollWin = () => window.scrollTo(0, 3400);

  const enviarPlano = (event) => {
    const element = event.target;
    let planos = 0;
    element.classList[1] == 1
      ? (planos = 119.9)
      : element.classList[1] == 2
      ? (planos = 219.9)
      : element.classList[1] == 3
      ? (planos = 269.9)
      : (planos = 539.9);
    localStorage.setItem("Plano", planos);

    navigate("/pagamento");
  };

  return (
    <Container>
      <GlobalStyle />
      <div className="container">
        <div className="nav-bar">
          <nav>
            <img
              src={LogoVEL}
              alt="Logo VEL"
              style={{ width: "65px", borderRadius: "10px" }}
            />
            <ul className="ul">
              <li>
                <a style={{cursor: "pointer"}} onClick={() => navigate("/sobrenos")}>Sobre</a>
              </li>
              <li className="pointer" onClick={scrollWin}>
                <a>Nossos Planos</a>
              </li>
              <li>
                <a onClick={() => navigate("/inicialingles")} style={{cursor: "pointer"}} className="idioma">
                  <img
                    src={English}
                    alt="English Logo"
                    style={{ width: "35px" }}
                  />
                </a>
              </li>
              <li>
                <a onClick={() => navigate("/login")}>
                  <button className="Login">Login</button>
                </a>
              </li>

              <button className="Cadastro" onClick={scrollWin}>
                Começe Agora
                <div className="arrow-wrapper">
                  {" "}
                  <div className="arrow"></div>
                </div>
              </button>
            </ul>
          </nav>
        </div>

        <div className="Video">
          <div className="conteudo">
            <h1>
              Simplificando a gestão <br /> de entregas para você
            </h1>
            <h2>
              Descubra o segredo para entregas mais
              <br />
              eficientes e lucrativas!
            </h2>
            <button onClick={scrollWin} className="torneProdutividade">
              Torne sua produtividade 3X maior
            </button>
          </div>
        </div>

        <div className="Frase">
          <h1>DIGA ADEUS AS COMANDAS DE PAPEL!</h1>

          <p>
            Com a VEL, você digitaliza seus pedidos e elimina a necessidade{" "}
            <br></br> de impressões. Isso significa menos papel, menos custos e
            um ambiente<br></br> mais sustentável.
          </p>
        </div>

        <div className="solution-description">
          <h1 className="simplificando">
            Simplificando Sua Gestão de Entregas
          </h1>

          <div className="um">
            <img src={CelularImg} alt="Celular" className="imgNotebook" />

            <div className="dois">
              <h2>
                A Solução Completa para{" "}
                <span className="highlight">Restaurantes</span> e <br></br>{" "}
                <span className="highlight">Empresas de Motoboys</span>
              </h2>
              <p>
                Diga adeus às complicações da gestão de entregas e adote uma
                plataforma que transforma a relação entre restaurantes, empresas
                de motoboys e seus entregadores. Desenvolvida para proporcionar
                eficiência, transparência e segurança, nossa solução digital
                oferece uma visão integrada de todo o seu fluxo de trabalho e
                finanças, tudo em um só lugar.
              </p>
              <p>
                Deixe as planilhas no passado e venha para o futuro da gestão de
                entregas, com toda a praticidade e confiabilidade que você
                precisa para levar seu negócio ao próximo nível.
              </p>
            </div>
          </div>
        </div>

        <div className="Funcionalidades">
          <h1>Temos como Funcionalidades</h1>

          <div className="Func">
            <div className="facilUsabilidade">
              <div className="usabilidade"></div>
              <p>
                FÁCIL <br></br> USABILIDADE
              </p>
            </div>

            <div className="gestaoSimplificada">
              <div className="gestao"></div>
              <p>
                GESTÃO <br></br> SIMPLIFICADA
              </p>
            </div>

            <div className="gerenciamentoComandas">
              <div className="Comandas"></div>
              <p>
                GERENCIAMENTO DE <br></br> COMANDAS DIGITAIS
              </p>
            </div>

            <div className="Financeiro">
              <div className="educacao"></div>
              <p>
                ACESSO A ED.FINANCEIRA <br></br> PARA ENTREGADORES
              </p>
            </div>
          </div>
        </div>

        <div id="avaliacoes">
          <div className="avaliacao">
            <p>
              "Adorei! Agora consigo organizar minhas entregas e entregadores de
              uma forma muito mais organizada usando a plataforma da VEL! Não me
              arrependo nem um pouco de ter fechado o contrato."
            </p>
            <div>
              <img src={ProfileImg} alt="Imagem de perfil" />
              <div>
                <span>Johny Ownes</span>
                <span>
                  <FaStar className="starW" />
                  <FaStar className="starW" />
                  <FaStar className="starW" />
                  <FaStar className="starW" />
                  <FaStar className="starB" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="NossosPlanos">
          <h1>
            Temos o <span className="blue">plano perfeito</span> para sua{" "}
            <span className="blue">empresa</span>!
          </h1>
          <p>Comece agora a simplificar a gestão de sua empresa</p>

          <div className="TiposPlanos">
            <div className="Desperte">
              <div>
                <h2 className="tituloCard">Desperte</h2>
                <p className="conteudoPlano">
                  {" "}
                  Acesso a toda nossa plataforma e cadastre até 10 entregadores
                </p>
                <p className="precoVelho">R$ 149,90</p>
                <p className="precoNovo">R$ 119,90/mês</p>
                <button onClick={enviarPlano} className="buttonCard 1">
                  Comece grátis
                </button>
              </div>
            </div>

            <div className="Desperte">
              <div>
                <h2 className="tituloCard">Conquiste</h2>
                <p className="conteudoPlano">
                  {" "}
                  Acesso a toda nossa plataforma e cadastre até 30 entregadores
                </p>
                <p className="precoVelho">R$ 279,90</p>
                <p className="precoNovo">R$ 219,90/mês</p>
                <button onClick={enviarPlano} className="buttonCard 2">
                  Comece grátis
                </button>
              </div>
            </div>

            <div className="Desperte">
              <div>
                <h2 className="tituloCard">Domine</h2>
                <p className="conteudoPlano">
                  {" "}
                  Acesso a toda nossa plataforma e cadastre até 60 entregadores
                </p>
                <p className="precoVelho">R$ 339,90</p>
                <p className="precoNovo">R$ 269,90/mês</p>
                <button onClick={enviarPlano} className="buttonCard 3">
                  Comece grátis
                </button>
              </div>
            </div>

            <div className="Desperte">
              <div>
                <h2 className="tituloCard">Transforme</h2>
                <p className="conteudoPlano">
                  {" "}
                  Acesso a toda nossa plataforma e cadastro ilimitado de
                  entregadores{" "}
                </p>
                <p className="precoVelho">R$ 669,90</p>
                <p className="precoNovo">R$ 539,90/mês</p>
                <button onClick={enviarPlano} className="buttonCard 4">
                  Comece grátis
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="branco">
            <img src={LogoVEL} alt="Icone da empresa" />
            <div className="icones">
              <a href="https://www.linkedin.com/company/vel-br" target="_blank">
                {" "}
                <img src={linkedinIcon} alt="" />
                linkedin.com/company/vel-br/
              </a>
              <a href="https://www.instagram.com/vel_proa/" target="_blank">
                {" "}
                <img src={instagramIcon} alt="" />
                @vel_proa
              </a>
              <a href="https://github.com/VELPR0A" target="_blank">
                {" "}
                <img src={githubIcon} alt="" />
                github.com/VELPR0A
              </a>
              <a href="#" target="_blank">
                {" "}
                <img src={gmailIcon} alt="" />
                virtualeasylog@gmail.com
              </a>
            </div>
          </div>
          <div className="azul">
            <span>
              <p>© 2024 VEL. Todos os direitos reservados.</p>
            </span>
            <span>
              <a href="#">Termos de Uso</a>
              <a href="#">Política de Privacidade</a>
            </span>
          </div>
        </footer>
      </div>
    </Container>
  );
}

export default PaginaInicial;
