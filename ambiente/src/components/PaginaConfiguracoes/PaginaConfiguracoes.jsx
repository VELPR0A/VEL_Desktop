import "../../assets/styles/PaginaConfiguracoes.css";
import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx"
import { GoBell } from "react-icons/go";
import { MdOutlinePassword, MdLanguage } from "react-icons/md";
import { SlLock } from "react-icons/sl";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { LuLogOut,LuMoon } from "react-icons/lu";

export default function PaginaConfiguracoes(){
    return(
        <>
        <main className="TelaConfiguracoes">
            <MenuLateral />
                <section className="Container">
                    <div className="titulo">
                        <h1>Configurações</h1>
                    </div>
                    <div className="Quadro">
                        <div className="Modo-Escuro">
                            <div className="Icone-titulo">
                                <div className="Icone">
                                    <LuMoon />
                                </div>
                                <h2>Modo Escuro</h2>
                            </div>
                            <div class="toggle-switch">
                                <input class="toggle-input" id="toggle" type="checkbox" />
                                <label class="toggle-label" for="toggle"></label>
                            </div>
                        </div>
                        <div className="Notificacoes">
                            <div className="Icone-titulo">
                                <div className="Icone">
                                    <GoBell />
                                </div>
                                <h2>Notificações</h2>
                            </div>
                            <div class="toggle-switch">
                                <input class="toggle-input" id="toggle" type="checkbox" />
                                <label class="toggle-label" for="toggle"></label>
                            </div>
                        </div>
                        <div className="AlterarSenha">
                            <div className="Icone-titulo">
                                <div className="Icone">
                                    <MdOutlinePassword />
                                </div>
                                <h2>Alterar Senha</h2>
                            </div>
                        </div>
                        <div className="Privacidade">
                            <div className="Icone-titulo">
                            <div className="Icone"><SlLock /></div>
                                <h2>Política de Privacidade</h2>
                            </div>
                        </div>
                        <div className="Termos">
                            <div className="Icone-titulo">
                            <div className="Icone"><IoDocumentTextOutline /></div>
                                <h2>Termos de Uso</h2>
                            </div>
                        </div>
                        <div className="Contato">
                            <div className="Icone-titulo">
                            <div className="Icone"><PiPhoneCallLight /></div>
                                <h2>Contato</h2>
                            </div>
                        </div>
                        <div className="Idioma">
                            <div className="Icone-titulo">
                            <div className="Icone"><MdLanguage /></div>
                                <h2>Idioma</h2>
                            </div>
                        </div>
                        <div className="Sair">
                            <div className="Icone-titulo">
                            <div className="Icone"><LuLogOut /></div>
                                <h2>Sair</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}