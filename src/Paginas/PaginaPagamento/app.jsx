import TelaPagamento from "../../components/TelaPagamento/TelaPagamento.jsx";
import { useNavigate } from "react-router-dom";
import GlobalStyle from '../../components/globalStyles';
import { Container } from "./pagamentotyle";

function AppPaginaPagamento() {
  const navigate = useNavigate();
  return (
    <Container>
      <GlobalStyle />
      <TelaPagamento valorPlano={localStorage.getItem("Plano")} />
    </ Container>
  )
}

export default AppPaginaPagamento;