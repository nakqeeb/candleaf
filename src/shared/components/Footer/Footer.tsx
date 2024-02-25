import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/images/black-white-logo.svg";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="logo-side">
            <div className="logo">
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
              <h2>Candleaf</h2>
            </div>
            <p>Your natural candle made for your home and for your wellness.</p>
          </div>
          <div className="options">
            <div className="discovery">
              <ul>
                <li>
                  <NavLink className="green-link" to={"/"}>
                    Discovery
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>New season</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Most searched</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Most selled</NavLink>
                </li>
              </ul>
            </div>
            <div className="about">
              <ul>
                <li>
                  <NavLink className="green-link" to={"/"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Help</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Shipping</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Affiliate</NavLink>
                </li>
              </ul>
            </div>
            <div className="info">
              <ul>
                <li>
                  <NavLink className="green-link" to={"/"}>
                    Info
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Contact us</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Privacy Policies</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rights">
        <p className="right">©Candleaf All Rights Reserved.</p>
        <p className="designed">Designed with ❤️ by <span>Nakqeeb</span></p>
      </div>
    </>
  );
};

export default Footer;
