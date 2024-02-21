import "./Feature.css";
import feature from "../../assets/images/feature.png";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <div className="info">
          <h2>Clean and fragrant soy wax</h2>
          <p>Made for your home and for your wellness</p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Eco-sustainable</span>:All recyclable materials, 0% CO2
              emissions
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Hyphoallergenic</span>: 100% natural, human friendly
              ingredients{" "}
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Handmade</span>: All candles are craftly made with love.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Long burning</span>: No more waste. Created for last long.
            </li>
          </ul>
          <CustomButton name="Learn more" />
        </div>
        <div className="image">
          <img src={feature} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
