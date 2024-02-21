import { FC } from "react";
import "./ProductDescription.css";
import CustomButton from "../../shared/components/UIElements/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import QuantityInput from "../../shared/components/UIElements/QuantityInput";

const ProductDescription: FC<{ prodName: string; prodPrice: string }> = ({
  prodName,
  prodPrice,
}) => {
  return (
    <div className="product-description">
      <h2>{prodName}</h2>
      <div className="price-qty">
        <div className="price">
          <p>{prodPrice}</p>
        </div>
        <div className="qty">
          <p>Quantity</p>
          <QuantityInput />
        </div>
      </div>
      <CustomButton className="cart-btn" name="+ Add to cart">
        <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
      </CustomButton>
      <div className="description">
        <ul>
          <li>
            <span>Wax:</span> Top grade Soy wax that delivers a smoke less,
            consistent burn
          </li>
          <li>
            <span>Fragrance:</span> Premium quality ingredients with natural
            essential oils{" "}
          </li>
          <li>
            <ul>
              <li>
                <span>Burning Time:</span> 70-75 hours
              </li>
              <li>
                <span>Dimension:</span> 10cm x 5cm{" "}
              </li>
              <li>
                <span>Weight:</span> 400g
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
