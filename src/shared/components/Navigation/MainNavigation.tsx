import "./MainNavigation.css";
import logo from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";

const MainNavigation = () => {
  return (
    <div className="header" id="header">
      <div className="container">
        <FontAwesomeIcon className="toggle-menu" icon={faBars} />
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <h2>Candleaf</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li>
              <NavLink to="/">
                Discovery <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
          <NavLink className="link" to={`cart`}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
