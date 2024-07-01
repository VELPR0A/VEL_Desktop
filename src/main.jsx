import React from "react";
import ReactDOM from "react-dom/client";

// 1- configurando router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaginaInicial from "./Paginas/PaginaInicial/App.jsx";
import PaginaInicialEn from "./Paginas/PaginaInicialEn/app.jsx";
import Pagamento from "./Paginas/PaginaPagamento/app.jsx"
import Sobrenos from "./Paginas/PaginaSobre/App.jsx"
import Sobrenosen from "./Paginas/PaginaSobreEn/App.jsx"
import Login from "./Paginas/PaginaLogin/app.jsx";
import Dashboard from "./Paginas/Dashboard/app.jsx"
import RecuperarSenha from "./Paginas/RecuperarSenha/App.jsx"
import CodigoValidacao from "./Paginas/CodigoValidacao/App.jsx"
import TelaAtendente from "./Paginas/TelaAtendente/app.jsx";
import AtribuirEntrega from "./Paginas/AtribuirEntrega/app.jsx";
import Configuracao from "./Paginas/PaginaConfiguracoes/app.jsx";
import Pagamentos from "./Paginas/Pagamentos/app.jsx"
import Entregadores from "./Paginas/TelaEntregador/app.jsx";
import Faturamento from "./Paginas/Faturamento/app.jsx";
import ContratoEntregador from "./Paginas/PaginaContratosEntregador/app.jsx";
import ContratoEmpregador from "./Paginas/PaginaContratosEmpresa/app.jsx";
import Coordenador from "./Paginas/TelaCoordenador/app.jsx";
import PerfilEmpresa from "./Paginas/PaginaPerfilEmpresa/app.jsx";
import EditarPerfilEmpresa from "./Paginas/PaginaEditarPerfilEmpresa/app.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/inicial" element={<PaginaInicial />} />
        <Route path="/inicialingles" element={<PaginaInicialEn />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sobrenos" element={<Sobrenos />} />        
        <Route path="/sobrenosen" element={<Sobrenosen />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />
        <Route path="/codigovalidacao" element={<CodigoValidacao />} />
        <Route path="/atendente" element={<TelaAtendente />} />
        <Route path="/atribuirentrega" element={<AtribuirEntrega />} />
        <Route path="/pagamentos" element={<Pagamentos />} />
        <Route path="/entregadores" element={<Entregadores />} />        
        <Route path="/faturamento" element={<Faturamento />} />             
        <Route path="/configuracao" element={<Configuracao />} />
        <Route path="/contratoentregador" element={<ContratoEntregador />} />      
        <Route path="/contratoempregador" element={<ContratoEmpregador />} />      
        <Route path="/coordenador" element={<Coordenador />} />   
        <Route path="/perfilempresa" element={<PerfilEmpresa />} />   
        <Route path="/editarperfilempresa" element={<EditarPerfilEmpresa />} />  
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
