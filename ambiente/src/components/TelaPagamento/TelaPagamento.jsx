import "../../assets/styles/TelaPagamento.css";
import { FaCreditCard, FaPaypal, FaPix } from "react-icons/fa6";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";

export default function TelaPagamento({valorPlano}){
    const CartaoPagamento = ({icone, titulo, texto}) => {
      return(
            <button>
                {icone}
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </button>
      );
    };

    const mudarPagina = () => {
        window.location = "/pages/paginaLogin.html";
    }

    return(
        <>
            <nav>
                <h1 style={{fontWeight: "500"}}>Virtual <span className="laranja">Easy</span> Log</h1>
            </nav>
            <main>
                <article>
                    <form action="#" method="POST"> {/*Colocar url do Backend*/}
                        <h2>Complete seu cadastro na <span className="laranja">VEL</span></h2>
                        <div>
                            <div>
                                <div>
                                    <label htmlFor="IRazaoSocial">Razão Social</label>
                                    <input type="text" name="RazaoSocial" id="IRazaoSocial" />
                                </div>
                                <div>
                                    <label htmlFor="ICNPJ">CNPJ</label>
                                    <input type="number" name="CNPJ" id="ICNPJ" />
                                </div>
                            </div>
                            
                            <div>
                                <div>
                                    <label htmlFor="IEmail">Email</label>
                                    <input type="email" name="Email" id="IEmail" />
                                </div>
                                <div>
                                    <label htmlFor="ITelefone">Telefone</label>
                                    <input type="tel" name="Telefone" id="ITelefone" placeholder="(00) 0 0000-0000" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="ICupom">
                                        <CiDiscount1 />
                                        Possui algum cupom ?</label>
                                    <div>
                                        <input type="text" name="Cupom" id="ICupom" placeholder="porTodaVel60" />
                                        <input type="button" value="REMOVER" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <section>
                        <h2>Como será o pagamento ?</h2>
                        <CartaoPagamento icone={<FaCreditCard />} titulo="Cartão de Crédito" texto="até 12x"/>
                        <CartaoPagamento icone={<FaPaypal />} titulo="PayPal" texto="até 12x" />
                        <CartaoPagamento icone={<FaPix />} titulo="Pix" texto="à vista" />
                        <CartaoPagamento icone={<FaCreditCard />} titulo="Cartão de Débito" texto="à vista" />
                    </section>
                    <footer>
                        <hr />
                        <p>
                            <FaCheckCircle /> Nós da Virtual Easy Log estamos comprometidos em oferecer uma ótima experiência. Por isso oferecemos uma garantia de 7 dias ou seu dinheiro de volta.
                        </p>
                    </footer>
                </article>
                <aside>
                    <h2>Resumo</h2>
                    <p><span>Subtotal</span> <span>R$ {valorPlano}/mês</span></p>
                    <p><span>TOTAL</span> <span><strong>R$ {valorPlano}</strong> <br /> em 12x de R$ {(valorPlano/12).toFixed(2)}</span></p>
                    <div>
                        <div>
                            <h4>TRANSFORME</h4>
                            <ul>
                                <li><FaCheck /> Acesso a toda nossa plataforma</li>
                                <li><FaCheck /> Cadastro ilimitado de entregadores</li>
                            </ul>
                        </div>
                        <button onClick={mudarPagina}>CONFIRMAR PAGAMENTO</button>
                        <p>
                            Ao preencher o formulário você permite que a Virtual Easy Log salve suas informações.
                        </p>
                    </div>
                </aside>
            </main>
        </>
    );
} 