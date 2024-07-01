import React from 'react';
import { useNavigate } from "react-router-dom";
import CelularImg from "../../assets/images/Celular.png";
import ProfileImg from "../../assets/images/Perfil.png";
import { FaStar } from "react-icons/fa";
import Portuguese from "../../assets/images/pt.png";
import LogoVEL from "../../assets/images/VEL.png";
import linkedinIcon from "../../assets/images/icons/Linkedin.png";
import instagramIcon from "../../assets/images/icons/Instagram.png";
import githubIcon from "../../assets/images/icons/Github.png";
import gmailIcon from "../../assets/images/icons/Gmail.png";
import { Container } from "./styledContainer";
import GlobalStyle from '../../components/globalStyles';

function PaginaInicial() {
 const scrollWin = () => window.scrollTo(0, 3400);
 const navigate = useNavigate();
 
 const enviarPlano = event => {
  const element = event.target;
  let planos = 0;
  element.classList[1] == 1 ? planos = 119.90 : element.classList[1] == 2 ? planos = 219.90 : element.classList[1] == 3 ? planos = 269.90 : planos = 539.90;
  localStorage.setItem("Plano", planos)
   
  navigate("/pagamento");
 };

 return (
  <Container>
    <GlobalStyle />
    <div className="container">
        <div className="nav-bar">
          <nav>
          <img src={LogoVEL} alt="Logo VEL" style={{width: "65px", borderRadius: "10px"}} />
            <ul className="ul">
              <li><a onClick={() => navigate("/sobrenosen")} style={{cursor: "pointer"}}>About</a></li>
              <li className='pointer' onClick={scrollWin}>
                <a>Our Plans</a>
                </li>
                <li>
                  <a onClick={() => navigate("/")} style={{cursor: "pointer"}} className="idioma">
                    <img src={Portuguese} alt="Portuguese Logo" style={{width: "35px"}} />
                  </a>
                </li>
              <li><a onClick={() => navigate("/login")}><button className='Login'>Login</button></a></li>
                
              <button className='Cadastro' onClick={scrollWin} >
                Get Started
                <div className="arrow-wrapper"> <div className="arrow"></div>
                </div>
              </button>
            </ul>
          </nav>
        </div>

          <div className='Video'>
          <div className='conteudo'>
            <h1>Simplifying delivery management <br /> for you</h1>
            <h2>
            Discover the secret to more efficient and profitable deliveries!
            </h2>
            <button onClick={scrollWin} className='torneProdutividade'>
              Boost your productivity by 3X
            </button>
          </div>
          </div>

        <div className='Frase'>
          <h1>SAY GOODBYE TO PAPER ORDERS!</h1>

          <p>With VEL, you digitize your orders and eliminate the need for printing. This means less paper, lower costs, and a more sustainable environment.</p>
        </div>

        <div className="solution-description">
          <h1 className='simplificando'>Simplifying Your Delivery Management</h1>

          <div className='um'>

            <img src={CelularImg} alt="Celular" className='imgNotebook' />

            <div className='dois'>
            <h2>The Complete Solution for <span className="highlight">Restaurants</span> and <br></br> <span className="highlight">Courier Companies</span></h2>
            <p>
              Say goodbye to delivery management complications and adopt a platform that transforms the relationship between restaurants,
              courier companies, and their couriers. Developed to provide efficiency, transparency, and security,
              our digital solution offers an integrated view of your entire workflow and finances, all in one place.
            </p>
            <p>
              Leave spreadsheets in the past and step into the future of delivery management, with all the practicality and reliability
              you need to take your business to the next level.
            </p>
            </div>

          </div>
        </div>
          
        <div className='Funcionalidades'>
          <h1>We Offer Features Like</h1>

          <div className='Func'>
          <div className='facilUsabilidade'>
          <div className='usabilidade'></div>
          <p>EASY <br></br> USABILITY</p>
          </div>

          <div className='gestaoSimplificada'>
            <div className='gestao'></div>
            <p>SIMPLIFIED <br></br> MANAGEMENT</p>
          </div>

          <div className='gerenciamentoComandas'>
            <div className='Comandas'></div>
            <p>DIGITAL ORDER <br></br> MANAGEMENT</p>
          </div>

          <div className='Financeiro'>
            <div className='educacao'></div>
            <p>ACCESS TO FINANCIAL <br></br> EDUCATION FOR COURIERS</p>
          </div>
          </div>
        </div>

        <div id='avaliacoes'>
          <div className="avaliacao">
          <p>"I love it! Now I can organize my deliveries and couriers in a much more organized way using the VEL platform! I have no regrets at all about signing the contract."</p>
          <div>
            <img src={ProfileImg} alt="Profile Image" />
            <div>
            <span>Johny Ownes</span>
            <span>
              <FaStar className='starW' />
              <FaStar className='starW' />
              <FaStar className='starW' />
              <FaStar className='starW' />
              <FaStar className='starB' />
            </span>
            </div>
            </div>
          </div>
        </div>

        <div className='NossosPlanos'>

          <h1>We have the <span className="blue">perfect plan</span> for your <span className="blue">company</span>!</h1>
          <p>Start simplifying your company management now</p>

          <div className='TiposPlanos'>

          <div className='Desperte'>
            <div>
              <h2 className='tituloCard'>Awaken</h2>
              <p className='conteudoPlano'> Access our entire platform and register up to 10 couriers</p>
              <p className="precoVelho">R$ 149,90</p>
              <p className="precoNovo">R$ 119,90/month</p>
              <button onClick={enviarPlano} className="buttonCard 1">Start for free</button>
            </div>
          </div>

          <div className='Desperte'>
            <div>
              <h2 className='tituloCard'>Conquer</h2>
              <p className='conteudoPlano'> Access our entire platform and register up to 30 couriers</p>
              <p className="precoVelho">R$ 279,90</p>
              <p className="precoNovo">R$ 219,90/month</p>
              <button onClick={enviarPlano} className="buttonCard 2">Start for free</button>
            </div>
          </div>

          <div className='Desperte'>
            <div>
              <h2 className='tituloCard'>Dominate</h2>
              <p className='conteudoPlano'> Access our entire platform and register up to 60 couriers</p>
              <p className="precoVelho">R$ 339,90</p>
              <p className="precoNovo">R$ 269,90/month</p>
              <button onClick={enviarPlano} className="buttonCard 3">Start for free</button>
            </div>
          </div>

          <div className='Desperte'>
            <div>
              <h2 className='tituloCard'>Transform</h2>
              <p className='conteudoPlano'> Access our entire platform and register unlimited couriers </p>
              <p className="precoVelho">R$ 669,90</p>
              <p className="precoNovo">R$ 539,90/month</p>
              <button onClick={enviarPlano} className="buttonCard 4">Start for free</button>
            </div>
          </div>
          </div>

        </div>
        <footer>
          <div className='branco'>
            <img src={LogoVEL} alt="Icone da empresa" />
            <div className="icones">
              <a href="https://www.linkedin.com/company/vel-br" target='_blank'> <img src={linkedinIcon} alt="" />linkedin.com/company/vel-br/</a> 
              <a href="https://www.instagram.com/vel_proa/" target='_blank'> <img src={instagramIcon} alt="" />@vel_proa</a> 
              <a href="https://github.com/VELPR0A" target='_blank'> <img src={githubIcon} alt="" />github.com/VELPR0A</a> 
              <a href="#" target='_blank'> <img src={gmailIcon} alt="" />virtualeasylog@gmail.com</a> 
            </div>
          </div>
          <div className="azul">
            <span>
              <p>© 2024 VEL. All rights reserved.</p>
            </span>
            <span>
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
            </span>
          </div>
        </footer>  
    </div>
  </ Container>
 );
}

export default PaginaInicial;
