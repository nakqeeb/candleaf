import { useNavigate } from "react-router-dom";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import "./CartFooter.css";

const CartFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="cart-footer">
      <div className="subtotal-tax">
        <p className="subtotal">
          Sub-total <span>$ 9.99</span>
        </p>
        <p className="tax">Tax and shipping cost will be calculated later</p>
      </div>
      <CustomButton
        className="cart-footer-btn"
        name="Check-out"
        onClick={() => navigate("/checkout")}
      />
    </div>
  );
};

export default CartFooter;
