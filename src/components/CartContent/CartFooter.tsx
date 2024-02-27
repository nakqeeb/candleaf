import { useNavigate } from "react-router-dom";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import "./CartFooter.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ProductData } from "../../shared/ProductData";
import CartProduct from "../../shared/store/CartProduct";
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

const CartFooter = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const cartItem = useSelector((state: RootState) => state.cart.cart);

  const quantity = getTotal(cartItem).totalQuantity;
  const price = getTotal(cartItem).totalPrice;
  useEffect(() => {
    cartItems.forEach(item => {
      setTotalPrice(prev => prev + item.prodPrice);
    });
  }, [cartItems]);
  return (
    <div className="cart-footer">
      <div className="subtotal-tax">
        <p className="total-quantity">Total Quantity <span>{quantity}</span></p>
        <p className="subtotal">
          Sub-total <span>{new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}</span>
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
