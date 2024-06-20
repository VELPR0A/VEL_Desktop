import TelaPagamento from "../../components/TelaPagamento/TelaPagamento.jsx";

function AppPaginaPagamento() {
  return (
    <>
      <TelaPagamento valorPlano={localStorage.getItem("Plano")} />
    </>
  )
}

export default AppPaginaPagamento;