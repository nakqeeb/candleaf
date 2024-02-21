import "./CheckoutCostInfo.css";
import candle_1 from "../../assets/images/candle-1.png";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import CustomInput from "../../shared/components/UIElements/CustomInput";
import { FC } from "react";

const CheckoutCostInfo: FC<{ step: number }> = ({ step }) => {
  return (
    <>
      <div className="checkout-product">
        <div className="image">
          <img src={candle_1} alt="" />
          <div className="img-badge">
            <p>1</p>
          </div>
        </div>
        <p className="prodName">Spiced Mint Candleaf®</p>
        <p className="prodPrice">$ 9.99</p>
      </div>
      <div className="discount">
        <CustomInput className="coupon-input" placeholder="Coupon code" />
        <CustomButton
          className="addcode-btn"
          name="Add code"
          style={{ backgroundColor: "#A8A8A8", fontSize: "17.65px" }}
        />
      </div>
      <div className="cost-info">
        <div className="subtotal">
          <p>Subtotal</p>
          <p>$ 9.99</p>
        </div>
        <div className="shipping">
          <p>Shipping</p>
          {step === 0 ? (
            <p>Calculated at the next step</p>
          ) : (
            <p>Free Shipping</p>
          )}
        </div>
      </div>
      <div className="total">
        <p>Total</p>
        <p>$ 9.99</p>
      </div>
    </>
  );
};

export default CheckoutCostInfo;
