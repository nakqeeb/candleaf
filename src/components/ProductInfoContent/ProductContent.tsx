import { FC } from "react";
import "./ProductContent.css";
import { Product } from "../../shared/ProductData";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
const ProductContent: FC<Product> = ({ id, prodImg, prodName, prodPrice }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="product-content">
      <div className="container">
        {width <= 767 && <h2>{prodName}</h2>}
        <ProductImage prodImg={prodImg} />
        <ProductDescription prodName={prodName} prodPrice={prodPrice} />
        {width <= 767 && <><p>
        All hand-made with natural soy wax, Candleaf is made for your pleasure
        moments.
      </p><p>🚚 FREE SHIPPING</p></>}
      </div>
    </div>
  );
};

export default ProductContent;
