import "../../assets/styles/MenuLateral.css";
import image from "../../assets/images/logoExemplo.png";
import iconeDashboard from "../../assets/images/icons/Dashboard.png";
import iconePagamentos from "../../assets/images/icons/Pagamentos.png";
import iconeEntregadores from "../../assets/images/icons/Entregadores.png";
import iconeFaturamento from "../../assets/images/icons/Faturamento.png";
import iconeContrato from "../../assets/images/icons/Contrato.png";
import iconeCoordenadores from "../../assets/images/icons/Coordenadores.png";
import iconeConfiguração from "../../assets/images/icons/Configuração.png";
import iconeMenu from "../../assets/images/icons/Menu.png";

export default function MenuLateral({pagina}){
    function toggleMenu(event){
        const toggler = event.target;
        const elementos = [document.querySelector("header"), document.querySelector("main"), document.querySelector("footer")];
        const aside = document.querySelector(".MenuLateral");
        const ToggleButton = document.querySelector(".ToggleButton");

        if(toggler.classList.contains("flip")){
            toggler.classList.remove("flip");
            elementos.map(elemento => elemento.classList.remove("desaparecer"));
            aside.classList.remove("shrinkedAside");
            ToggleButton.style.left = "90%";
        } else {
            toggler.classList.add("flip");
            elementos.map(elemento => elemento.classList.add("desaparecer"));
            aside.classList.add("shrinkedAside");
            ToggleButton.style.left = "30%";
        }
    }

    const selecionado = link => pagina === link ? "pageSelected" : "";

    return(
        <aside className="MenuLateral">
            <header>
                <h1>Virtual <span className="laranja">Easy</span> Log</h1>
            </header>
            <div className="ToggleButton"><img src={iconeMenu} alt="Menu para fechar menu lateral" onClick={toggleMenu} /></div>
            <main>
                <div className="logoEmpresa">
                    <div><img src={image} alt="Logo de usuário" className="imgEmpresa" /></div>
                    <h2 className="nomeEmpresa">Nome Empresa</h2>
                </div>
                <ul>
                    <li className={selecionado("Dashboard")}>
                        <a href="#" >
                            <img src={iconeDashboard} alt="Icone de Dashboard" /> Dashboard
                        </a>
                    </li>
                    <li className={selecionado("Pagamentos")}>
                        <a href="#">
                            <img src={iconePagamentos} alt="Icone de pagamento" />Pagamentos
                        </a>
                    </li>
                    <li className={selecionado("Entregadores")}>
                        <a href="#">
                            <img src={iconeEntregadores} alt="Icone de entregador" />Entregadores
                        </a>
                    </li>
                    <li className={selecionado("Faturamento")}>
                        <a href="#">
                            <img src={iconeFaturamento} alt="Icone de faturamento" />Faturamento
                        </a>
                    </li>
                    <li className={selecionado("Contrato")}>
                        <a href="#">
                            <img src={iconeContrato} alt="Icone de contrato" />Contrato
                        </a>
                    </li>
                    <li className={selecionado("Coordenadores")}>
                        <a href="#">
                            <img src={iconeCoordenadores} alt="Icone de coordenador" />Coordenadores
                        </a>
                    </li>
                </ul>
            </main>
            <footer>
                <h2>Suporte</h2>
                <ul>
                    <li className={selecionado("Configuração")}>
                        <a href="#">
                            <img src={iconeConfiguração} alt="Icone de Configuração" /> Configuração
                        </a>
                    </li>
                </ul>
            </footer>
        </ aside>
    );
};