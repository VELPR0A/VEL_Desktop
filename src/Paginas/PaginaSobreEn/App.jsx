import React from 'react';
import './Sobre.css';  // Importa o CSS
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import iconVisao from '../../assets/images/icons/Visão.png';
import iconValores from '../../assets/images/icons/Valores.png';
import iconOds04 from '../../assets/images/icons/ODS04.png';
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
    role: 'Full-Stack Developer | Designer | Social media',
    github: 'https://github.com/IagoMat',
    linkedin: 'https://www.linkedin.com/in/iagomatheus/',
    img: Iago
  },
  {
    name: 'Emilly Freitas',
    role: 'Front-end Developer | Designer',
    github: 'https://github.com/EmillyMLFreitas',
    linkedin: 'https://www.linkedin.com/in/emillymlfreitas/',
    img: Emilly
  },
  {
    name: 'Gabrielle Correa',
    role: 'Front-end Developer | Designer',
    github: 'https://github.com/gabriellecorrea',
    linkedin: 'https://www.linkedin.com/in/gabriellecorrealeme/',
    img: Gabrielle
  },
  {
    name: 'Diogo Antonny',
    role: 'Scrum Master | Full-stack Developer',
    github: 'https://github.com/DiogoJP202',
    linkedin: 'https://www.linkedin.com/in/diogo-antonny/',
    img: Diogo
  },
  {
    name: 'Isabella Ribas',
    role: 'PO | Full stack Developer',
    github: 'https://github.com/Isabella2709',
    linkedin: 'https://www.linkedin.com/in/isabella-ribas-46579b176/',
    img: Isabella
  },
  {
    name: 'Gustavo Teixeira',
    role: 'Finance | Front-End Developer',
    github: 'https://github.com/PettaDev',
    linkedin: 'https://www.linkedin.com/in/gustavoteixeira2005/',
    img: Gustavo
  },
  {
    name: 'Elias Andrade',
    role: 'Database Admin | Back-End Developer',
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
        <h1 className='titulo'>How We Help You with Your Deliveries</h1>
          <div className='MVV'>
            <div className='missao'>
              <div className='iconMissao'></div>
              <h1>Our Mission</h1>
              <p>Provide an efficient and transparent solution for delivery management, eliminating the use of paper and automating financial processes. Our focus is to improve business productivity and ensure fair and accurate compensation for deliverers.</p>
            </div>
            <div className='VV'>
              <div className='visao'>
                <img src={iconVisao} alt=""/>
                <div className='conteudo'>
                <h1>Our Vision</h1>
                <p>To be the leading platform in delivery management, recognized for innovation and excellence in meeting the needs of restaurants and courier companies.</p>
                </div>
              </div>
              <div className='valor'>
                <img src={iconValores} alt="" />
                <div className='texto'>
                  <h1>Our Values</h1>
                  <p>Transparency, efficiency, and safety are the pillars of our operation. We believe in the importance of clear financial management and valuing the work of deliverers. Our commitment is to continuous improvement and customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ODS'>
        <h1>What We Are Contributing to Sustainable Development</h1>
        <div className='cardODS'>
          <div className='ODS4'>
          <img src={iconOds04} alt="" className='iconOds04' />
            <h1>ODS 04</h1>
            <p>Our goal is to transform restaurant management with useful data for business success, as well as improve the working environment for deliverers, ensuring safer payments.</p>
          </div>
          <div className='ODS8'>
          <img src={iconOds08} alt="" className='iconOds04' />
            <h1>ODS 08</h1>
            <p>We also aim to offer financial education through courses with short videos on how to better manage money, promoting a more prosperous financial life for deliverers.</p>
          </div>
          <div className='ODS11'>
          <img src={iconOds11} alt="" className='iconOds04' />
            <h1>ODS 11</h1>
            <p>We will contribute to a more eco-friendly work environment by replacing paper tickets with virtual ones, reducing paper production and waste.</p>
          </div>
        </div>
      </div>

      <div className="team-section">
        <h1>Our Team</h1>
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
