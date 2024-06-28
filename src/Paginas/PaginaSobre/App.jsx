import React from 'react';
import './Sobre.css';  // Importa o CSS
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import iconVisao from '../../assets/images/icons/Visão.png';
import iconValores from '../../assets/images/icons/Valores.png';
import iconMissoes from "../../assets/images/icons/Missao.png"
import iconOds04 from '../../assets/images/icons/ODS9.png';
import iconOds08 from '../../assets/images/icons/ODS08.png';
import iconOds11 from '../../assets/images/icons/ODS11.png';
import telescopio from "../../assets/images/icons/telescopio.webp"
import Diogo from "../../assets/images/Diogo.png"; 
import Elias from "../../assets/images/Elias.png";
import Emilly from "../../assets/images/Emilly.png";
import Gabrielle from "../../assets/images/Gabrielle.png";
import Gustavo from "../../assets/images/Gustavo.png";
import Iago from "../../assets/images/Iago.png";
import Isabella from "../../assets/images/Isabella.png";

const teamMembers = [
  {
    name: 'Diogo Antonny',
    role: 'Scrum Master | Desenvolvedor Full-stack',
    github: 'https://github.com/DiogoJP202',
    linkedin: 'https://www.linkedin.com/in/diogo-antonny/',
    img: Diogo
  },
  {
    name: 'Elias Andrade',
    role: 'Adm de Banco de Dados | Desenvolvedor Back-End',
    github: 'https://github.com/EliasAndrad',
    linkedin: 'https://www.linkedin.com/in/elias-andrade-/',
    img: Elias
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
    name: 'Gustavo Teixeira',
    role: 'Financeiro | Desewnvolvedor Front-End',
    github: 'https://github.com/PettaDev',
    linkedin: 'https://www.linkedin.com/in/gustavoteixeira2005/',
    img: Gustavo
  },
  {
    name: 'Iago Matheus',
    role: 'Desenvolvedor Full-Stack | Designer ',
    github: 'https://github.com/IagoMat',
    linkedin: 'https://www.linkedin.com/in/iagomatheus/',
    img: Iago
  },
  {
    name: 'Isabella Ribas',
    role: 'PO | Desenvolvadora Full stack',
    github: 'https://github.com/Isabella2709',
    linkedin: 'https://www.linkedin.com/in/isabella-ribas-46579b176/',
    img: Isabella
  }
];

function Login() {
  return (
    <div className="container">
      <div className='imagem-fundo'>
        <div className='transparencia'>
        <h1 className='titulo'> Como te ajudamos nas suas entregas</h1>
          <div className='MVV'>
            <div className='missao card'>
              <img src={iconMissoes} alt=""/>
              <div className="conteudo">
                <h1>Nossa Missão</h1>
                <li>Proporcionar uma solução eficiente e transparente para a gestão de entregas.</li>
                <li>Eliminar o uso de papel.</li>
                <li>Garantir remuneração justa e precisa para os entregadores.</li>
              </div>
            </div>
            <div className='visao card'>
              <img src={iconVisao} alt=""/>
              <div className='conteudo'>
              <h1>Nossa Visão</h1>
              <li>Ser a plataforma líder na gestão de entregas.</li>
              <li>Excelência no atendimento às necessidades de restaurantes.</li>
              <li>Excelência no atendimento às necessidades de empresas de entregadores.</li>
              </div>
            </div>
            <div className='valor card'>
              <img src={iconValores} alt="" />
              <div className='texto'>
                <h1>Nossos Valores</h1>
                <li>Transparência, eficiência e segurança são os pilares da atuação.</li>
                <li>Importância de uma gestão financeira clara.</li>
                <li>Valorização do trabalho dos entregadores.</li>
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
            <li>Inovar na gestão de entregas.</li>
            <li>Melhorar a eficiência das operações.</li>
            <li>Melhorar os processos financeiros.</li>
          </div>
          <div className='ODS8'>
          <img src={iconOds08} alt="" className='iconOds04' />
            <h1>ODS 08</h1>
            <li>Transformar a gestão com dados úteis.</li>
            <li>Melhora o trabalho dos entregadores.</li>
            <li>Pagamentos mais seguros.</li>
          </div>
          <div className='ODS11'>
          <img src={iconOds11} alt="" className='iconOds04' />
            <h1>ODS 11</h1>
            <li>Ambiente de trabalho mais ecológico.</li>
            <li>Substituir comandas de papel por virtuais.</li>
            <li>Reduzir a produção de papel.</li>
          </div>
        </div>
      </div>
      <div className="visaoFuturo">
        <img src={telescopio} alt="Icone de um telescopio" />
        <div>
          <h2>Visão de Futuro</h2>
          <p>     
            Quanto ao futuro do nosso projeto, planejamos desenvolver parcerias estratégicas com restaurantes e empresas de motoboys para expandir nossa base de clientes e a presença da nossa plataforma em toda a região de São Paulo.
          </p>
          <p>
            Também visamos parcerias com educadores financeiros, assim podemos implementar nosso projeto de finanças pessoais completamente gratuito para os entregadores, que são guerreiros e guerreiras que lutam todos os dias para realizar suas entregas.
          </p>
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
