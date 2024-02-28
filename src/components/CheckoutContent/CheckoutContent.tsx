import { useState } from "react";
import "./CheckoutContent.css";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutForm from "./CheckoutForm";
import CheckoutCostInfo from "./CheckoutCostInfo";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import CartProduct from "../../shared/store/CartProduct";
import { useSelector } from "react-redux";
import { RootState } from "../../shared/store";
const getTotal = (cartItem: CartProduct[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity!;
    totalPrice += item.prodPrice! * item.quantity!;
  });
  return { totalPrice, totalQuantity };
};

const CheckoutContent = () => {
  const { height, width } = useWindowDimensions();
  const [step, setStep] = useState<number>(0);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);
  const cartItem = useSelector((state: RootState) => state.cart.cart);
  const quantity = getTotal(cartItem).totalQuantity;
  const price = getTotal(cartItem).totalPrice;
  return (
    <div className="checkout">
      {width <= 767 && (
        <div className="left-half checkout-head">
          <CheckoutHeader step={step} />
        </div>
      )}
      <div className="left-half">
        {width > 767 && <CheckoutHeader step={step} />}
        <CheckoutForm
          paymentConfiremd={confirmed}
          onChangeStep={(curStep: any) => setStep(curStep)}
          onSubmit={() => {
            console.log("submitted");
            setConfirmed(true);
          }}
          step={step}
        />
      </div>
      {width > 767 && (
        <div className="right-half" style={{ height: "100vh" }}>
          <CheckoutCostInfo paymentConfiremd={confirmed} step={step} />
        </div>
      )}
      {width <= 767 && (
        <div
          className="right-half"
          style={{ height: expanded ? "100vh" : "70px", overflow: expanded ? "scroll" : "hidden" }}
        >
          {width > 767 && (
            <CheckoutCostInfo paymentConfiremd={confirmed} step={step} />
          )}
          {width <= 767 && (
            <div
              className="expandable-content"
              onClick={() => setExpanded(!expanded)}
            >
              <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
              <h2>See your order details</h2>
              <FontAwesomeIcon className="arrow-down" icon={faChevronDown} />
              <p>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(price)}{" "}
              </p>
            </div>
          )}
          <CheckoutCostInfo paymentConfiremd={confirmed} step={step} />
        </div>
      )}
    </div>
  );
};

export default CheckoutContent;
