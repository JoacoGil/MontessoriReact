import "./Header.css";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav id="navbar">
        <ul>
          <li>
            <NavLink to="/"><img src={require(`../../img/LogoMontessori.png`)} alt="" /></NavLink>
          </li>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"contacto"}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>Sobre Nosotros</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
