import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CheckoutConfirmed.css";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import CustomLink from "../../shared/components/UIElements/CustomLink";
import { useNavigate } from "react-router-dom";

const CheckoutConfirmed = () => {
  const navigate = useNavigate();
  return (
    <div className="confirmed">
      <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
      <h2>Payment Confirmed</h2>
      <p className="order-id">ORDER #2039</p>
      <p className="order-msg">
        {" "}
        Thank you Joe for buying Candleaf. The nature is grateful to you. Now
        that your order is confirmed it will be ready to ship in 2 days. Please
        check your inbox in the future for your order updates.
      </p>
      <CustomButton
        className="back-to-shopping-btn"
        name="Back to shopping"
        onClick={() => navigate("/candleaf")}
      />
      <CustomLink className={"print-receipt"} name="Print receipt" />
    </div>
  );
};
export default CheckoutConfirmed;
