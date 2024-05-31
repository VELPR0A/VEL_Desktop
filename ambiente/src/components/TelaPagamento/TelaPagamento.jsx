import "../../assets/styles/TelaPagamento.css";
import { FaCreditCard, FaPaypal, FaPix } from "react-icons/fa6";
import { FaCheckCircle, FaCheck } from "react-icons/fa";

export default function TelaPagamento(){
    const CartaoPagamento = ({icone, titulo, texto}) => {
      return(
            <div>
                {icone}
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
      );
    };

    return(
        <>
            <nav>
                <h1 style={{fontWeight: "500"}}>Virtual <span className="laranja">Easy</span> Log</h1>
            </nav>
            <main>
                <article>
                    <form action="#" method="POST"> {/*Colocar url do Backend*/}
                        <h2>Complete seu cadastro na <span className="laranja">VEL</span></h2>
                        <label htmlFor="IRazaoSocial">Razão Social</label>
                        <input type="text" name="RazaoSocial" id="IRazaoSocial" />
                    
                        <label htmlFor="ICNPJ">CNPJ</label>
                        <input type="number" name="CNPJ" id="ICNPJ" />
                        <br />
                        <label htmlFor="IEmail">Email</label>
                        <input type="email" name="Email" id="IEmail" />
                        <label htmlFor="ITelefone">Telefone</label>
                        <input type="tel" name="Telefone" id="ITelefone" />
                        <br />
                        <label htmlFor="ICupom">Possui algum cupom ?</label>
                        <input type="text" name="Cupom" id="ICupom" />
                        <input type="button" value="REMOVER" />
                    </form>
                    <section>
                        <h2>Como será o pagamento ?</h2>
                        <CartaoPagamento icone={<FaCreditCard />} titulo="Cartão de Crédito" texto="até 12x" />
                        <CartaoPagamento icone={<FaPaypal />} titulo="PayPal" texto="até 12x" />
                        <CartaoPagamento icone={<FaPix />} titulo="Pix" texto="à vista" />
                        <CartaoPagamento icone={<FaCreditCard />} titulo="Cartão de Débito" texto="à vista" />
                    </section>
                </article>
                <aside>
                    <h2>Resumo</h2>
                    <p><span>Subtotal</span> <span>R$ 0/mês</span></p>
                    <p><span>TOTAL</span> <span><strong>R$ 0</strong> <br /> em 12x de R$ 0</span></p>
                    <div>
                        <h4>TRANSFORME</h4>
                        <ul>
                            <li><FaCheck /> Acesso a toda nossa plataforma</li>
                            <li><FaCheck /> Cadastro ilimitado de entregadores</li>
                        </ul>
                        <button>CONFIRMAR PAGAMENTO</button>
                        <p>Ao preencher o formulário você permite que a Virtual Easy Log salve suas informações.</p>
                    </div>
                </aside>
            </main>
            <footer>
                <hr />
                <p><FaCheckCircle /> Nós da Virtual Easy Log estamos comprometidos em oferecer uma ótima experiência. Por isso oferecemos uma garantia de 7 dias ou seu dinheiro de volta.</p>
            </footer>
        </>
    );
} 