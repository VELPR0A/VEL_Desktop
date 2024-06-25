import "../../assets/styles/MenuLateral.css";
import image from "../../assets/images/logoExemplo.png";
import iconeCoordenadores from "../../assets/images/icons/Coordenadores.png";
import iconeConfiguração from "../../assets/images/icons/Configuração.png";
import iconeMenu from "../../assets/images/icons/Menu.png";
import LogoVEL from "../../assets/images/VEL2.png"

export default function MenuLateral({pagina}){
    function toggleMenu(event){
        const toggler = event.target;
        const elementos = [document.querySelector("header"), document.querySelector("main .logoEmpresa h2"), document.querySelector("footer > h2")];
        const spaName = document.querySelectorAll(".spanName");
        const aside = document.querySelector(".MenuLateral");
        const ToggleButton = document.querySelector(".ToggleButton");
        const listas = document.querySelectorAll(".MenuLateral ul li");

        if(toggler.classList.contains("flip")){
            toggler.classList.remove("flip");
            elementos.map(elemento => elemento.classList.remove("desaparecer"));
            for(let c = 0; c <= spaName.length - 1; c++){
                spaName[c].classList.remove("desaparecer");
            }
            aside.classList.remove("shrinkedAside");
            ToggleButton.style.left = "90%";
            for(let c = 0; c <= listas.length - 1; c++) {
                listas[c].style.left = "unset";
            }
        } else {
            toggler.classList.add("flip");
            elementos.map(elemento => elemento.classList.add("desaparecer"));
            for(let c = 0; c <= spaName.length - 1; c++) spaName[c].classList.add("desaparecer");
            aside.classList.add("shrinkedAside");
            ToggleButton.style.left = "80%";
            console.log(listas.length)
            for(let c = 0; c <= listas.length - 1; c++){
                listas[c].style.left = "40%";
            }
        }
    }

    const selecionado = link => pagina === link ? "pageSelected" : "";

    const redirecionarPagina = () => window.location = "/pages/paginaPerfilEmpresa.html";

    return(
        <aside className="MenuLateral">
            <header style={{display: "flex", justifyContent: "center"}}>
                <img src={LogoVEL} className="LogoVEL" alt="Logo VEl" style={{width: "60%", margin: "30px 0"}} />
            </header>
            <div className="ToggleButton"><img src={iconeMenu} alt="Menu para fechar menu lateral" onClick={toggleMenu} /></div>
            <main>
                <div className="logoEmpresa">
                    <div><img src={image} alt="Logo de usuário" className="imgEmpresa" onClick={redirecionarPagina} /></div>
                    <h2 className="nomeEmpresa">Nome Empresa</h2>
                </div>
                <ul>
                    <li className={selecionado("Coordenadores")}>
                        <a href="/pages/atribuirEntrega.html">
                            <img src={iconeCoordenadores} alt="Icone de coordenador" />
                            <span className="spanName">Coordenadores</span>
                        </a>
                    </li>
                    <li className={selecionado("Atendente")}>
                        <a href="/pages/paginaAtendente.html">
                        <img src={iconeCoordenadores} alt="Icone de atendente" />
                        <span className="spanName">Atendente</span>
                        </a>
                    </li>
                </ul>
            </main>
            <footer>
                <h2>Suporte</h2>
                <ul>
                    <li className={selecionado("Configuração")}>
                        <a href="/pages/paginaConfiguracoes.html">
                            <img src={iconeConfiguração} alt="Icone de Configuração" /> 
                            <span className="spanName">Configuração</span>
                        </a>
                    </li>
                </ul>
            </footer>
        </ aside>
    );
};