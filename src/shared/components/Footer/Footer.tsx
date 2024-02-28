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
              <NavLink to="/candleaf">
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
                  <NavLink className="green-link" to={"/candleaf"}>
                    Discovery
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>New season</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Most searched</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Most selled</NavLink>
                </li>
              </ul>
            </div>
            <div className="about">
              <ul>
                <li>
                  <NavLink className="green-link" to={"/candleaf"}>
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Help</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Shipping</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Affiliate</NavLink>
                </li>
              </ul>
            </div>
            <div className="info">
              <ul>
                <li>
                  <NavLink className="green-link" to={"/candleaf"}>
                    Info
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Contact us</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Privacy Policies</NavLink>
                </li>
                <li>
                  <NavLink to={"/candleaf"}>Terms & Conditions</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rights">
        <p className="right">©Candleaf All Rights Reserved.</p>
        <p className="designed">
          Designed with ❤️ by <span>Nakqeeb</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
