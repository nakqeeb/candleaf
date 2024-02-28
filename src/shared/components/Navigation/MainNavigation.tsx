import "./MainNavigation.css";
import logo from "../../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faChevronDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { forwardRef, useState } from "react";
import withClickOutside from "../../utils/withClickOutside";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MainNavigation = forwardRef(({ open, setOpen }: any, ref: any) => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const { height, width } = useWindowDimensions();
  console.log(open);
  const toggleMenu = () => {
    // setToggle(!toggle);
    setOpen(!open);
  };

  return (
    <div className="header" id="header">
      <div className="container">
        <div ref={ref}>
          <FontAwesomeIcon className="toggle-menu" onClick={toggleMenu} icon={open ? faXmark : faBars} />
        </div>
        <div className="logo">
          <NavLink to="/candleaf">
            <img src={logo} alt="" />
          </NavLink>
          <h2>Candleaf</h2>
        </div>
        <div className="navlinks" style={{ opacity: width <= 767 ? open === true ? 1 : 0 : 1 }}>
          <ul>
            <li>
              <NavLink to="/products">
                Discovery <FontAwesomeIcon icon={faChevronDown} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/candleaf">About</NavLink>
            </li>
            <li>
              <NavLink to="/candleaf">Contact us</NavLink>
            </li>
          </ul>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faUser} />
          <NavLink className="link" to={`cart`}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <div className="cart-badge">{cartItems.length}</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
});

export default withClickOutside(MainNavigation);