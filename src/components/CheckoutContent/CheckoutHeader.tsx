import "./CheckoutHeader.css";
import logo from "../../assets/images/logo.svg";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const CheckoutHeader: FC<{ step: number }> = ({ step }) => {
  // const [currentStep, setCurrentStep] = useState<number>(0);
  const headerNames = ["Details", "Shipping", "Payment"];
  //   useEffect(() => {
  //     setCurrentStep(step);
  //   }, [step]);
  return (
    <div className="checkout-header">
      <div className="logo">
        <img src={logo} alt="" />
        <h2>Candleaf</h2>
      </div>
      <div className="navlinks">
        <p style={{ color: "var(--green-color)", cursor: "default" }}>Cart</p>
        <FontAwesomeIcon
          style={{ color: "rgb(97 97 97 / 50%)", fontSize: "14px" }}
          icon={faAngleRight}
        />
        {headerNames.map((headerName, index) => (
          <>
            <p
              style={{
                color:
                  step > index ? "var(--green-color)" : "var(--black-color)",
                fontWeight: step === index ? "bold" : "normal",
                cursor: "default",
              }}
            >
              {headerName}
            </p>
            {index !== 2 && (
              <FontAwesomeIcon
                style={{ color: "rgb(97 97 97 / 50%)", fontSize: "14px" }}
                icon={faAngleRight}
              />
            )}
          </>
        ))}
        {/* <p style={fontStyle}>Cart</p>
            <FontAwesomeIcon icon={faAngleRight} />
            <p>Details</p>
            <FontAwesomeIcon icon={faAngleRight} />
            <p>Shipping</p>
            <FontAwesomeIcon icon={faAngleRight} />
            <p>Payment</p> */}
      </div>
    </div>
  );
};

export default CheckoutHeader;
