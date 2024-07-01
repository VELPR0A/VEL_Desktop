import MenuLateral from "../../components/MenuLateralAtendenteCoordenador/MenuLateral.jsx";
import ListaPedidos from "../AtribuirEntrega/ListaPedidos.jsx";
import Input from "./Input.jsx";
import { Container } from "./atribuirentregastyle.ts";

const listapedidos = [
  {
    id: "#0424",
    endereco: "R. dos Pinheiros - Pinheiros, São Paulo - SP, 08142-640",
  },
  {
    id: "#0425",
    endereco: "R. das Laranjeiras - Jardim Gaivotas, São Paulo - SP, 04849-531",
  },
  {
    id: "#0426",
    endereco: "R. Iguatemi - Itaim Bibi, São Paulo - SP, 01451-011",
  },
  {
    id: "#0427",
    endereco: "R. Guaicurus - Lapa, São Paulo - SP, 05033-000",
  },
  {
    id: "#0428",
    endereco: "Av. Cruzeiro do Sul - Santana, São Paulo - SP, 02030-100",
  },
  {
    id: "#0429",
    endereco: "Av. Braz Leme - Santana, São Paulo - SP, 02022-011",
  },
];

export default function AtribuirEntrega() {
  const style = {
    display: "flex",
    backgroundColor: "#ECF3FB",
    overflowY: "hidden !important",
  };

  return (
    <Container style={style}>
      <MenuLateral pagina="Coordenadores"/>
      <section className="container1">
        <div className="titulo">
          <h1>Atribuir Entrega</h1>
        </div>
        <div className="Conteudo">
          <div className="Quadro">
            <h2>Lista de Pedidos</h2>
            {listapedidos.map((pedido) => {
              return (
                <ListaPedidos
                  key={pedido.id}
                  id={pedido.id}
                  endereco={pedido.endereco}
                />
              );
            })}
          </div>
          <div className="Quadro">
            <div className="item ListaEn">
              <h2>Status dos Entregadores</h2>
              <ul>
                <li className="on">
                  <div className="entregador">
                    Amélia Fagundes
                    <br />
                    <span className="EnID">ID: #001</span>
                  </div>
                </li>
                <li className="on">
                  <div className="entregador">
                    Paula Ribeiro
                    <br />
                    <span className="EnID">ID: #002</span>
                  </div>
                </li>
                <li className="off">
                  <div className="entregador">
                    Leonardo Magalhães
                    <br />
                    <span className="EnID">ID: #003</span>
                  </div>
                </li>
                <li className="off">
                  <div className="entregador">
                    Giovane Chaves
                    <br />
                    <span className="EnID">ID: #004</span>
                  </div>
                </li>
                <li className="on">
                  <div className="entregador">
                    Vanda Santana
                    <br />
                    <span className="EnID">ID: #005</span>
                  </div>
                </li>
                <li className="on">
                  <div className="entregador">
                    Francisco Nogueira
                    <br />
                    <span className="EnID">ID: #006</span>
                  </div>
                </li>
                <li className="off">
                  <div className="entregador">
                    Rita Pinheiro
                    <br />
                    <span className="EnID">ID: #007</span>
                  </div>
                </li>
                <li className="off">
                  <div className="entregador">
                    Milton Alvarez
                    <br />
                    <span className="EnID">ID: #008</span>
                  </div>
                </li>
              </ul>
              <footer>
                <div className="online">On-line</div>
                <div className="offline">Off-line</div>
              </footer>
            </div>
          </div>
          <div className="Quadro-Input">
            <h2>Atribuir Entrega</h2>
            <Input />
          </div>
        </div>
      </section>
    </Container>
  );
}
