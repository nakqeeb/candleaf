import QuantityInput from "../../shared/components/UIElements/QuantityInput";
import "./CartTable.css";
import candle_1 from "../../assets/images/candle-1.png";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const CartTable = () => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="table">
      <div className="table-head">
        <p>Product</p>
        <p>Price</p>
        {width > 767 && <p>Quantity</p>}
        {width > 767 && <p>Total</p>}
      </div>
      <div className="table-body">
        <div className="product">
          <img src={candle_1} alt="" />
          <div className="prod-name">
            <h2>Spiced Mint Candleaf®</h2>
            <button>Remove</button>
          </div>
        </div>
        {width > 767 && (
          <>
            <div className="price">
              <p>$ 9.99</p>
            </div>
            <div className="quantity">
              <QuantityInput />
            </div>
          </>
        )}
        {width <= 767 && (
          <div className="mobile-price-qty">
            <div className="price">
              <p>$ 9.99</p>
            </div>
            <div className="quantity">
              <p>Quantity</p>
              <QuantityInput />
            </div>
          </div>
        )}
        <div className="total">
          <p>$ 9.99</p>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
