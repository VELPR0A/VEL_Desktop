import { FaCreditCard, FaPaypal, FaPix } from "react-icons/fa6";
import { FaCheckCircle, FaCheck } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import LogoVEL from "../../assets/images/VEL.png";
import Http from '../../components/RequisicaoHTTP/Http';

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

    const validacaoForm = e => {
        const form = {
            RazaoSocial: document.querySelector("#IRazaoSocial").value,
            CNPJ: document.querySelector("#ICNPJ").value,
            Email: document.querySelector("#IEmail").value,
            Tel: document.querySelector("#ITelefone").value,
            Cupom: document.querySelector("#ICupom").value,
            Valor: valorPlano
        }

        if(form.RazaoSocial.length <= 1 || form.CNPJ.length <= 1 || form.Email.length <= 1 || form.Tel.length <= 1 || form.Valor.length <= 1) return alert("Preencha todos os campos!");

        fetch("<URL AQUI>", Http("POST", form))
        .then(response => response.json())
        .then(response => {
            const resultado = response.data;

            if(resultado){
                alert("Pagamento confirmado! Seu comprovante e senha serão enviados por email. ");
                return window.location = "/pages/paginaLogin.html";
            } else {
                return alert("Erro na validação do pagamento!")
            }
        })
        .catch(error => alert("Erro ao fazer a requisição!"))
    }

    return(
        <div className="container">
            <nav>
                <img src={LogoVEL} alt="Logo da empresa" />
            </nav>
            <main>
                <article>
                    <form target="#">
                        <h2>Complete seu cadastro na <span className="laranja">VEL</span></h2>
                        <div>
                            <div>
                                <div>
                                    <label htmlFor="IRazaoSocial">Razão Social</label>
                                    <input type="text" name="RazaoSocial" id="IRazaoSocial" />
                                </div>
                                <div>
                                    <label htmlFor="ICNPJ">CNPJ</label>
                                    <input required minLength={14} type="number" name="CNPJ" id="ICNPJ" />
                                </div>
                            </div>
                            
                            <div>
                                <div>
                                    <label htmlFor="IEmail">Email</label>
                                    <input autoComplete="on" required type="email" name="Email" id="IEmail" />
                                </div>
                                <div>
                                    <label htmlFor="ITelefone">Telefone</label>
                                    <input  autoComplete="on" required minLength={11} type="tel" name="Telefone" id="ITelefone" placeholder="0 0000-0000" />
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
                        <input type="submit" onClick={validacaoForm} value="CONFIRMAR PAGAMENTO" />
                        <p>
                            Ao preencher o formulário você permite que a Virtual Easy Log salve suas informações.
                        </p>
                    </div>
                </aside>
            </main>
        </ div>
    );
} 