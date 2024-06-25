import React from 'react';
import './Sobre.css';  // Importa o CSS
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import iconVisao from '../../assets/images/icons/Visão.png';
import iconValores from '../../assets/images/icons/Valores.png';
import iconOds04 from '../../assets/images/icons/ODS9.png';
import iconOds08 from '../../assets/images/icons/ODS08.png';
import iconOds11 from '../../assets/images/icons/ODS11.png';
import Diogo from "../../assets/images/Diogo.png"; 
import Elias from "../../assets/images/Elias.png";
import Emilly from "../../assets/images/Emilly.png";
import Gabrielle from "../../assets/images/Gabrielle.png";
import Gustavo from "../../assets/images/Gustavo.png";
import Iago from "../../assets/images/Iago.png";
import Isabella from "../../assets/images/Isabella.png";

const teamMembers = [
  {
    name: 'Iago Matheus',
    role: 'Desenvolvedor Full-Stack | Designer | Social media ',
    github: 'https://github.com/IagoMat',
    linkedin: 'https://www.linkedin.com/in/iagomatheus/',
    img: Iago
  },
  {
    name: 'Emilly Freitas',
    role: 'Desevolvedora Front-end | Designer',
    github: 'https://github.com/EmillyMLFreitas',
    linkedin: 'https://www.linkedin.com/in/emillymlfreitas/',
    img: Emilly
  },
  {
    name: 'Gabrielle Correa',
    role: 'Desenvolvedora Front-end | Designer',
    github: 'https://github.com/gabriellecorrea',
    linkedin: 'https://www.linkedin.com/in/gabriellecorrealeme/',
    img: Gabrielle
  },
  {
    name: 'Diogo Antonny',
    role: 'Scrum Master | Desenvolvedor Full-stack',
    github: 'https://github.com/DiogoJP202',
    linkedin: 'https://www.linkedin.com/in/diogo-antonny/',
    img: Diogo
  },
  {
    name: 'Isabella Ribas',
    role: 'PO | Desenvolvadora Full stack',
    github: 'https://github.com/Isabella2709',
    linkedin: 'https://www.linkedin.com/in/isabella-ribas-46579b176/',
    img: Isabella
  },
  {
    name: 'Gustavo Teixeira',
    role: 'Financeiro | Desewnvolvedor Front-End',
    github: 'https://github.com/PettaDev',
    linkedin: 'https://www.linkedin.com/in/gustavoteixeira2005/',
    img: Gustavo
  },
  {
    name: 'Elias Andrade',
    role: 'Adm de Banco de Dados | Desenvolvedor Back-End',
    github: 'https://github.com/EliasAndrad',
    linkedin: 'https://www.linkedin.com/in/elias-andrade-/',
    img: Elias
  }
];

function Login() {
  return (
    <div className="container">
      <div className='imagem-fundo'>
        <div className='transparencia'>
        <h1 className='titulo'> Como te ajudamos nas suas entregas</h1>
          <div className='MVV'>
            <div className='missao'>
              <div className='iconMissao'></div>
              <h1>Nossa Missão</h1>
              <p>Proporcionar uma solução eficiente e transparente para a gestão de entregas, eliminando o uso de papel e automatizando processos financeiros. Nosso foco é melhorar a produtividade dos negócios e garantir uma remuneração justa e precisa para os entregadores.</p>
            </div>
            <div className='VV'>
              <div className='visao'>
                <img src={iconVisao} alt=""/>
                <div className='conteudo'>
                <h1>Nossa Visão</h1>
                <p>Ser a plataforma líder na gestão de entregas, reconhecida pela inovação e excelência no atendimento às necessidades de restaurantes e empresas de motoboys.</p>
                </div>
              </div>
              <div className='valor'>
                <img src={iconValores} alt="" />
                <div className='texto'>
                  <h1>Nossos Valores</h1>
                  <p>Transparência, eficiência e segurança são os pilares da nossa atuação. Acreditamos na importância de uma gestão financeira clara e na valorização do trabalho dos entregadores. Nosso compromisso é com a melhoria contínua e a satisfação de nossos clientes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ODS'>
        <h1>O que estamos contribuindo para um desenvolvimento sustentável </h1>
        <div className='cardODS'>
          <div className='ODS4'>
          <img src={iconOds04} alt="" className='iconOds04' />
            <h1>ODS 09</h1>
            <p>A plataforma VEL utiliza tecnologia avançada para inovar na gestão de entregas, melhorando a eficiência das operações e dos processos financeiros.</p>
          </div>
          <div className='ODS8'>
          <img src={iconOds08} alt="" className='iconOds04' />
            <h1>ODS 08</h1>
            <p>Nosso objetivo é transformar a gestão de restaurantes com dados úteis para o sucesso do negócio, além de melhorar o ambiente de trabalho dos entregadores, assegurando pagamentos mais seguros.</p>
          </div>
          <div className='ODS11'>
          <img src={iconOds11} alt="" className='iconOds04' />
            <h1>ODS 11</h1>
            <p>Contribuiremos para um ambiente de trabalho mais ecológico, substituindo comandas de papel por virtuais, reduzindo a produção e desperdício de papel.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h1>Nossa Equipe</h1>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} className="team-avatar"/>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-icons">
                <a className="team-icon-link" href={member.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a className="team-icon-link" href={member.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
