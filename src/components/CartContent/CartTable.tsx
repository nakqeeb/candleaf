import QuantityInput from "../../shared/components/UIElements/QuantityInput";
import "./CartTable.css";
import candle_1 from "../../assets/images/candle-1.png";

const CartTable = () => {
  return (
    <div className="table">
      <div className="table-head">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <div className="table-body">
        <div className="product">
          <img src={candle_1} alt="" />
          <div className="prod-name">
            <h2>Spiced Mint Candleaf®</h2>
            <button>Remove</button>
          </div>
        </div>
        <div className="price">
          <p>$ 9.99</p>
        </div>
        <div className="quantity">
          <QuantityInput />
        </div>
        <div className="total">
          <p>$ 9.99</p>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
