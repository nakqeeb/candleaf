import QuantityInput from "../../shared/components/UIElements/QuantityInput";
import "./CartTable.css";
import candle_1 from "../../assets/images/candle-1.png";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { ProductData } from "../../shared/ProductData";
import { cartActions } from "../../shared/store/cart-slice";
import { useEffect, useState } from "react";
import CartProduct from "../../shared/store/CartProduct";
import { RootState } from "../../shared/store";

const CartTable = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const { height, width } = useWindowDimensions();
  const onIncreaseQuantity = (productId: string) => {
    dispatch(cartActions.increaseQuantity({ id: productId }));
    console.log(cartItems);
  };

  const onDecreaseQuantity = (productId: string) => {
    dispatch(cartActions.decreaseQuantity({ id: productId }));
  };
  return (
    <div className="table">
      <div className="table-head">
        <p>Product</p>
        <p>Price</p>
        {width > 767 && <p>Quantity</p>}
        {width > 767 && <p>Total</p>}
      </div>
      {cartItems.map((item) => {
        return (
          <div className="table-body">
            <div className="product">
              <img src={item.prodImg} alt="" />
              <div className="prod-name">
                <h2>{item.prodName}</h2>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
            {width > 767 && (
              <>
                <div className="price">
                  <p>$ {item.prodPrice}</p>
                </div>
                <div className="quantity">
                  <QuantityInput
                    prodId={item.id}
                    quantity={
                      cartItems.find((cartItem) => cartItem.id === item.id)
                        ?.quantity! ?? 0
                    }
                    onPlusQuantity={() => onIncreaseQuantity(item.id)}
                    onMinusQuantity={() => {
                      onDecreaseQuantity(item.id);
                    }}
                  />
                </div>
              </>
            )}
            {width <= 767 && (
              <div className="mobile-price-qty">
                <div className="price">
                  <p>$ {item.prodPrice}</p>
                </div>
                <div className="quantity">
                  <p>Quantity</p>
                  <QuantityInput
                    prodId={item.id}
                    quantity={
                      cartItems.find((cartItem) => cartItem.id === item.id)
                        ?.quantity!
                    }
                    onPlusQuantity={() => onIncreaseQuantity(item.id)}
                    onMinusQuantity={() => {
                      onDecreaseQuantity(item.id);
                    }}
                  />
                </div>
              </div>
            )}
            <div className="total">
              <p>$ {item.prodPrice * item.quantity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartTable;
