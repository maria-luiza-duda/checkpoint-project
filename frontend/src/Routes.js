import React from "react";
import Tela11relatrioCLIENTES from "pages/Tela11relatrioCLIENTES";
import Tela10relatrioPREVIS from "pages/Tela10relatrioPREVIS";
import Tela9relatrioVENDASP from "pages/Tela9relatrioVENDASP";
import Tela82itensdopedido from "pages/Tela82itensdopedido";
import Tela81itensdopedido from "pages/Tela81itensdopedido";
import Tela8itensdopedidoap from "pages/Tela8itensdopedidoap";
import Tela7PEDIDOSFATURADOS from "pages/Tela7PEDIDOSFATURADOS";
import Tela6PEDIDOSSEMFATURAMENTO from "pages/Tela6PEDIDOSSEMFATURAMENTO";
import Tela5gerarpedido from "pages/Tela5gerarpedido";
import Tela4cadastraroualte from "pages/Tela4cadastraroualte";
import Tela2Cadastrodocliente from "pages/Tela2Cadastrodocliente";
import Telaprincipal from "pages/Telaprincipal";
import Login from "pages/Login";
import Tela3Gerenciamentodep from "pages/Tela3Gerenciamentodep";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tela3Gerenciamentodep />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/telaprincipal" element={<Telaprincipal />} />
        <Route
          path="/tela2cadastrodocliente"
          element={<Tela2Cadastrodocliente />}
        />
        <Route
          path="/tela4cadastraroualte"
          element={<Tela4cadastraroualte />}
        />
        <Route path="/tela5gerarpedido" element={<Tela5gerarpedido />} />
        <Route
          path="/tela6pedidossemfaturamento"
          element={<Tela6PEDIDOSSEMFATURAMENTO />}
        />
        <Route
          path="/tela7pedidosfaturados"
          element={<Tela7PEDIDOSFATURADOS />}
        />
        <Route
          path="/tela8itensdopedidoap"
          element={<Tela8itensdopedidoap />}
        />
        <Route path="/tela81itensdopedido" element={<Tela81itensdopedido />} />
        <Route path="/tela82itensdopedido" element={<Tela82itensdopedido />} />
        <Route
          path="/tela9relatriovendasp"
          element={<Tela9relatrioVENDASP />}
        />
        <Route
          path="/tela10relatrioprevis"
          element={<Tela10relatrioPREVIS />}
        />
        <Route
          path="/tela11relatrioclientes"
          element={<Tela11relatrioCLIENTES />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
