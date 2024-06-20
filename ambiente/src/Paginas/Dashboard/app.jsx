import MenuLateral from "../../components/MenuLateral/MenuLateral";
import "../../assets/styles/dashbord.css"
import Despesas from "../../components/Graficos/Despesas";
import FaturamentoMensal from "../../components/Graficos/FaturamentoMensal";
import MoneyIcon from "../../assets/images/Money.png";
import CapaceteIcon from "../../assets/images/Capacete.png";
import Metas from "../../components/Graficos/Metas";
import Http from '../../components/RequisicaoHTTP/Http';

function App() {
  const informacoes = async () => {
    try{
      const user = localStorage.getItem("User");
      const requisição = await fetch("<URL AQUI>", Http("POST", user));
      if(response.status >= 200 || response.status <= 399){
        const informacoes = await requisição.json();
        console.log(informacoes);
      } else {
          throw new Error(`ERROR ${response.status}`);
      }

    } catch(error){
      console.log(error);
      return alert("Erro na requisição de dados, tente recarregar a página!")
    }
  }

  const CartaoFaturamento = ({titulo, divClasse, h2Classe, h4Classe}) => {
    return(
      <div className={divClasse}>
          <main>
            <h2>R$ <span className={h2Classe} >0</span></h2>
            <h3>{titulo}</h3>
            <h4><span className={h4Classe}>0%</span> na última semana</h4>
          </main>
          <aside>
            <img src={MoneyIcon} alt="Icone de dinheiro" />
          </aside>
      </div>
    );
  };

  const GraficoConteudo = ({divClass, h2, h3Span, pSpan, grafico}) => {
    return(
      <div className={divClass}>
        <div className="conteudo">
          <h2>{h2}</h2>
          <h3>R$ <span>{h3Span}</span></h3>
          <p><span>{pSpan}%</span> na última semana</p>
          {grafico}
        </div>
      </div>
    );
  };

  return (
    <>
      <MenuLateral pagina="Dashboard" />

      <div className="container">
        <CartaoFaturamento titulo="Faturamento Diário" divClasse="item FD" h2Classe="valorFD" h4Classe="porcFD" />
        <CartaoFaturamento titulo="Faturamento Semanal" divClasse="item FS" h2Classe="valorFS" h4Classe="porcFS" />
        <CartaoFaturamento titulo="Total a pagar" divClasse="item TP" h2Classe="valorTP" h4Classe="porcTP" />
          
        <div className="item En">
          <main>
            <h2><span className="valorEn">0</span> Cadastrados</h2>
            <h3>Entregadores</h3>
            <h4><span className="porcEn">0%</span> na última semana</h4>
          </main>
          <aside>
            <img src={CapaceteIcon} alt="Icone de capacete" />
          </aside>
        </div>

        <GraficoConteudo divClass="item Graf1" h2="Metas" h3Span="0" pSpan="0" grafico={<FaturamentoMensal />} />

        <GraficoConteudo divClass="item Graf2" h2="Despesas" h3Span="0" pSpan="0" grafico={<Despesas />} />

        <div className="item Graf3">
          <Metas />
        </div>

        <div className="item ListaEn">
          <h2>Status dos Entregadores</h2>
          <ul>
            <li className="on">
              <div>
                Amélia Fagundes
                <br />
                <span className="EnID">ID: #001</span>
              </div>
            </li>
            <li className="on">
              <div>
                Paula Ribeiro
                <br />
                <span className="EnID">ID: #002</span>
              </div>
            </li>
            <li className="off">
              <div>
                Leonardo Magalhães
                <br />
                <span className="EnID">ID: #003</span>
              </div>
            </li>
            <li className="off">
              <div>
                Giovane Chaves
                <br />
                <span className="EnID">ID: #004</span>
              </div>
            </li>
            <li className="on">
              <div>
                Amélia Fagundes
                <br />
                <span className="EnID">ID: #001</span>
              </div>
            </li>
            <li className="on">
              <div>
                Paula Ribeiro
                <br />
                <span className="EnID">ID: #002</span>
              </div>
            </li>
            <li className="off">
              <div>
                Leonardo Magalhães
                <br />
                <span className="EnID">ID: #003</span>
              </div>
            </li>
            <li className="off">
              <div>
                Giovane Chaves
                <br />
                <span className="EnID">ID: #004</span>
              </div>
            </li>
            <li className="on">
              <div>
                Amélia Fagundes
                <br />
                <span className="EnID">ID: #001</span>
              </div>
            </li>
            <li className="on">
              <div>
                Paula Ribeiro
                <br />
                <span className="EnID">ID: #002</span>
              </div>
            </li>
            <li className="off">
              <div>
                Leonardo Magalhães
                <br />
                <span className="EnID">ID: #003</span>
              </div>
            </li>
          </ul>
          <footer>
            <div className="online">On-line</div>
            <div className="offline">Off-line</div>
          </footer>
        </div>
      </div>

    </>
  )
}

export default App;