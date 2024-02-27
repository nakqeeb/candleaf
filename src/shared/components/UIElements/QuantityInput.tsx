import { FC, useEffect, useState } from "react";
import "./QuantityInput.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { RootState } from "../../store";

const QuantityInput: FC<{
  prodId: string;
  quantity: number;
  onPlusQuantity?: any;
  onMinusQuantity?: any;
}> = ({ prodId, quantity, onPlusQuantity, onMinusQuantity }) => {
  // const [quantity, setQuantity] = useState<number>(0);
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const currentCartItem = cartItems.find((item) => item.id === prodId);

  const plusQty = () => {
    //setQuantity((prev) => prev + 1);
    onPlusQuantity();
  };
  const minusQty = () => {
    if (quantity !== 0) {
      //setQuantity((prev) => prev - 1);
      onMinusQuantity();
    }
  };
  return (
    <div className="qty-form">
      <button className="plus-btn" onClick={plusQty}>
        +
      </button>
      <input className="input-qty" type="text" value={quantity} />
      <button className="minus-btn" onClick={minusQty}>
        -
      </button>
    </div>
  );
};

export default QuantityInput;
