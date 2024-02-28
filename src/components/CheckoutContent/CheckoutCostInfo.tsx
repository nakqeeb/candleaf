import "./CheckoutCostInfo.css";
import candle_1 from "../../assets/images/candle-1.png";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import CustomInput from "../../shared/components/UIElements/CustomInput";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import CartProduct from "../../shared/store/CartProduct";

const getTotal = (cartItem: CartProduct[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity!;
    totalPrice += item.prodPrice! * item.quantity!;
  });
  return { totalPrice, totalQuantity };
};

const CheckoutCostInfo: FC<{ step: number; paymentConfiremd: boolean }> = ({
  step,
  paymentConfiremd,
}) => {
  const [coupon, setCoupon] = useState<string>("");
  const [couponValue, setCouponValue] = useState<string>("");
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const cartItem = useSelector((state: RootState) => state.cart.cart);
  const quantity = getTotal(cartItem).totalQuantity;
  const price = getTotal(cartItem).totalPrice;
  return (
    <>
      {cartItems.map((item) => (
        <div className="checkout-product">
          <div className="image">
            <img src={item.prodImg} alt="" />
            <div className="img-badge">
              <p>{item.quantity}</p>
            </div>
          </div>
          <p className="prodName">{item.prodName}</p>
          <p className="prodPrice">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(item.prodPrice)}
          </p>
        </div>
      ))}
      {paymentConfiremd === false && (
        <div className="discount">
          <CustomInput onChange={(e: any) => setCouponValue(e.target.value)} className="coupon-input" placeholder="Coupon code" />
          <CustomButton
            className="addcode-btn"
            name="Add code"
            disabled={couponValue === ""}
            style={{ backgroundColor: couponValue === "" && "#A8A8A8", fontSize: "17.65px" }}
            onClick={() => setCoupon(couponValue)}
          />
        </div>
      )}
      <div className="cost-info">
        <div className="subtotal">
          <p>Subtotal</p>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </p>
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
        <p>
          {/* price - (price * 0.15) is equavlent to (price - 15%) */}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(coupon === "discount" || coupon === "DISCOUNT" ? price - (price * 0.15) : price)} 
        </p>
      </div>
    </>
  );
};

export default CheckoutCostInfo;
