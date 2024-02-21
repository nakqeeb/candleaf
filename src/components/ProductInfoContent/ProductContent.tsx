import { FC } from "react";
import "./ProductContent.css";
import { Product } from "../../shared/ProductData";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
const ProductContent: FC<Product> = ({ id, prodImg, prodName, prodPrice }) => {
  return (
    <div className="product-content">
      <div className="container">
        <ProductImage prodImg={prodImg} />
        <ProductDescription prodName={prodName} prodPrice={prodPrice} />
      </div>
    </div>
  );
};

export default ProductContent;
