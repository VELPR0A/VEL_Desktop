import React from 'react';
import '../PaginaSobre/Sobre.css';  // Import CSS
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import iconVisao from '../../assets/images/icons/Visão.png';
import iconValores from '../../assets/images/icons/Valores.png';
import iconMissoes from "../../assets/images/icons/Missao.png"
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
    name: 'Diogo Antonny',
    role: 'Scrum Master | Full-stack Developer',
    github: 'https://github.com/DiogoJP202',
    linkedin: 'https://www.linkedin.com/in/diogo-antonny/',
    img: Diogo
  },
  {
    name: 'Elias Andrade',
    role: 'Database Administrator | Back-End Developer',
    github: 'https://github.com/EliasAndrad',
    linkedin: 'https://www.linkedin.com/in/elias-andrade-/',
    img: Elias
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
    name: 'Gustavo Teixeira',
    role: 'Finance | Front-End Developer',
    github: 'https://github.com/PettaDev',
    linkedin: 'https://www.linkedin.com/in/gustavoteixeira2005/',
    img: Gustavo
  },
  {
    name: 'Isabella Ribas',
    role: 'PO | Full-stack Developer',
    github: 'https://github.com/Isabella2709',
    linkedin: 'https://www.linkedin.com/in/isabella-ribas-46579b176/',
    img: Isabella
  },
  {
    name: 'Iago Matheus',
    role: 'Full-Stack Developer | Designer',
    github: 'https://github.com/IagoMat',
    linkedin: 'https://www.linkedin.com/in/iagomatheus/',
    img: Iago
  },
];

function Login() {
  return (
    <div className="container">
      <div className='imagem-fundo'>
        <div className='transparencia'>
        <h1 className='titulo'>How we help with your deliveries</h1>
          <div className='MVV'>
            <div className='missao card'>
              <img src={iconMissoes} alt=""/>
              <div className="conteudo">
                <h1>Our Mission</h1>
                <li>Provide an efficient and transparent solution for delivery management.</li>
                <li>Eliminate paper usage.</li>
                <li>Ensure fair and accurate compensation for delivery personnel.</li>
              </div>
            </div>
            <div className='visao card'>
              <img src={iconVisao} alt=""/>
              <div className='conteudo'>
              <h1>Our Vision</h1>
              <li>To be the leading platform in delivery management.</li>
              <li>Excellence in meeting restaurant needs.</li>
              <li>Excellence in meeting delivery company needs.</li>
              </div>
            </div>
            <div className='valor card'>
              <img src={iconValores} alt="" />
              <div className='texto'>
                <h1>Our Values</h1>
                <li>Transparency, efficiency, and security are the pillars of our work.</li>
                <li>Importance of clear financial management.</li>
                <li>Valuing the work of delivery personnel.</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ODS'>
        <h1>What we are contributing to sustainable development</h1>
        <div className='cardODS'>
          <div className='ODS4'>
          <img src={iconOds04} alt="" className='iconOds04' />
            <h1>ODS 09</h1>
            <li>Innovate in delivery management.</li>
            <li>Improve operational efficiency.</li>
            <li>Improve financial processes.</li>
          </div>
          <div className='ODS8'>
          <img src={iconOds08} alt="" className='iconOds04' />
            <h1>ODS 08</h1>
            <li>Transform management with useful data.</li>
            <li>Improve the work of delivery personnel.</li>
            <li>More secure payments.</li>
          </div>
          <div className='ODS11'>
          <img src={iconOds11} alt="" className='iconOds04' />
            <h1>ODS 11</h1>
            <li>More eco-friendly work environment.</li>
            <li>Replace paper orders with virtual ones.</li>
            <li>Reduce paper production.</li>
          </div>
        </div>
      </div>
      <div className="visaoFuturo">
        <img src={telescopio} alt="Icon of a telescope" />
        <div>
          <h2>Future Vision</h2>
          <p>
            Regarding the future of our project, we plan to develop strategic partnerships with restaurants and delivery companies to expand our customer base and the presence of our platform throughout the São Paulo region.
          </p>
          <p>
            We also aim for partnerships with financial educators, so we can implement our completely free personal finance project for couriers, who are warriors fighting every day to make their deliveries.
          </p>
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