import { FC, useState } from "react";
import "./ProductDescription.css";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import QuantityInput from "../../shared/components/UIElements/QuantityInput";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../shared/store/cart-slice";
import { RootState } from "../../shared/store";
import { ProductData } from "../../shared/ProductData";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { height, width } = useWindowDimensions();
  const [quantity, setQuantity] = useState<number>(0);
  const productId = useParams().productId;
  const cartItems = useSelector((state: RootState) => state.cart.cart);
  const product = ProductData.find((prod) => prod.id === productId);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: productId,
        prodName: product?.prodName,
        prodPrice: product?.prodPrice,
        prodImg: product?.prodImg,
        quantity,
      })
    );
  };
  return (
    <div className="product-description">
      {width > 767 && <h2>{product!.prodName}</h2>}
      <div className="price-qty">
        <div className="price">
          <p>{product!.prodPrice}</p>
        </div>
        <div className="qty">
          <p>Quantity</p>
          {/* <QuantityInput prodId={id} quantity={cartItems.find(cartItem => cartItem.id === id)?.quantity! ?? 0} onPlusQuantity={() => onIncreaseQuantity(id)} onMinusQuantity={() => onDecreaseQuantity(id)} /> */}
          <QuantityInput
            prodId={productId!}
            quantity={quantity}
            onPlusQuantity={() => setQuantity((prev) => prev + 1)}
            onMinusQuantity={() => setQuantity((prev) => prev - 1)}
          />
        </div>
      </div>
      <CustomButton
        className="cart-btn"
        name="+ Add to cart"
        onClick={addToCartHandler}
      >
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
      </CustomButton>
      <div className="description">
        {width > 767 && (
          <ul>
            <li>
              <span>Wax:</span> Top grade Soy wax that delivers a smoke less,
              consistent burn
            </li>
            <li>
              <span>Fragrance:</span> Premium quality ingredients with natural
              essential oils
            </li>
            <li>
              <ul>
                <li>
                  <span>Burning Time:</span> 70-75 hours
                </li>
                <li>
                  <span>Dimension:</span> 10cm x 5cm
                </li>
                <li>
                  <span>Weight:</span> 400g
                </li>
              </ul>
            </li>
          </ul>
        )}
        {width <= 767 && (
          <ul>
            <li>
              <span>Wax:</span> Top grade Soy wax that delivers a smoke less,
              consistent burn
            </li>
            <li>
              <span>Fragrance:</span> Premium quality ingredients with natural
              essential oils
            </li>
            <li>
              <span>Burning Time:</span> 70-75 hours
            </li>
            <li>
              <span>Dimension:</span> 10cm x 5cm
            </li>
            <li>
              <span>Weight:</span> 400g
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
