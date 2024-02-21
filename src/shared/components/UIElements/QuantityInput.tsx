import { useState } from "react";
import "./QuantityInput.css";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const plusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const minusQuantity = () => {
    if (quantity !== 0) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="qty-form">
      <button className="plus-btn" onClick={plusQuantity}>
        +
      </button>
      <input className="input-qty" type="text" value={quantity} />
      <button className="minus-btn" onClick={minusQuantity}>
        -
      </button>
    </div>
  );
};

export default QuantityInput;
