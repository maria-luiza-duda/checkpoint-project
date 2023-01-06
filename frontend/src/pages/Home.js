import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Tela3Gerenciamentodep</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/telaprincipal">Telaprincipal</Link>
        </li>
        <li>
          <Link to="/tela2cadastrodocliente">Tela2Cadastrodocliente</Link>
        </li>
        <li>
          <Link to="/tela4cadastraroualte">Tela4cadastraroualte</Link>
        </li>
        <li>
          <Link to="/tela5gerarpedido">Tela5gerarpedido</Link>
        </li>
        <li>
          <Link to="/tela6pedidossemfaturamento">
            Tela6PEDIDOSSEMFATURAMENTO
          </Link>
        </li>
        <li>
          <Link to="/tela7pedidosfaturados">Tela7PEDIDOSFATURADOS</Link>
        </li>
        <li>
          <Link to="/tela8itensdopedidoap">Tela8itensdopedidoap</Link>
        </li>
        <li>
          <Link to="/tela81itensdopedido">Tela81itensdopedido</Link>
        </li>
        <li>
          <Link to="/tela82itensdopedido">Tela82itensdopedido</Link>
        </li>
        <li>
          <Link to="/tela9relatriovendasp">Tela9relatrioVENDASP</Link>
        </li>
        <li>
          <Link to="/tela10relatrioprevis">Tela10relatrioPREVIS</Link>
        </li>
        <li>
          <Link to="/tela11relatrioclientes">Tela11relatrioCLIENTES</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
