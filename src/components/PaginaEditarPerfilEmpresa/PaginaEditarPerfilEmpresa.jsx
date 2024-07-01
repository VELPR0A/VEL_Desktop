import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx";
import EditarInformacoes from "./Informacoes.jsx";
import { Container } from "./editarperfil.ts";

var perfil = [
  {
    empresa: "Menu - Food & Drink",
    pagamento: "Cartão de Crédito",
    plano: "Transforme",
    cnpj: "123.456.789-10",
    cadastro: "10/11/2018",
  },
];

export default function EditarPerfilEmpresa() {
  const style = {
    backgroundColor: "#ECF3FB",
    display: "flex",
  };
  return (
    <Container style={style}>
      <MenuLateral />
      <section className="Container">
        <div className="Quadro">
          {perfil.map((usuario) => {
            return (
              <EditarInformacoes
                nomeEmpresa={usuario.empresa}
                nomeProprietario={usuario.proprietario}
                telefone={usuario.telefone}
                formaPagamento={usuario.pagamento}
                plano={usuario.plano}
                email={usuario.email}
                cnpj={usuario.cnpj}
                dataCadastro={usuario.cadastro}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
}
