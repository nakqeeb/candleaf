import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../../assets/images/black-white-logo.svg";

const Footer = () => {
  return (
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
              <li>Discovery</li>
              <li>New season</li>
              <li>Most searched</li>
              <li>Most selled</li>
            </ul>
          </div>
          <div className="about">
            <ul>
              <li>About</li>
              <li>Help</li>
              <li>Shipping</li>
              <li>Affiliate</li>
            </ul>
          </div>
          <div className="info">
            <ul>
              <li>Info</li>
              <li>Contact us</li>
              <li>Privacy Policies</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
