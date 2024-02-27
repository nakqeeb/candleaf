import { FC } from "react";
import "./ProductContent.css";
import { Product, ProductData } from "../../shared/ProductData";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";
import { useParams } from "react-router-dom";
const ProductContent: FC<Product> = () => {
  const { height, width } = useWindowDimensions();
  const productId = useParams().productId;
  const product = ProductData.find((prod) => prod.id === productId);
  return (
    <div className="product-content">
      <div className="container">
        {width <= 767 && <h2>{product!.prodName}</h2>}
        <ProductImage prodImg={product!.prodImg} />
        <ProductDescription />
        {width <= 767 && (
          <>
            <p>
              All hand-made with natural soy wax, Candleaf is made for your
              pleasure moments.
            </p>
            <p>🚚 FREE SHIPPING</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductContent;
