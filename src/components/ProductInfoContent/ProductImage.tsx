import { FC } from "react";
import "./ProductImage.css";

const ProductImage: FC<{ prodImg: string }> = ({ prodImg }) => {
  return (
    <div className="product-image">
      <img src={prodImg} alt="" />
      <p>
        All hand-made with natural soy wax, Candleaf is made for your pleasure
        moments.
      </p>
      <p>🚚 FREE SHIPPING</p>
    </div>
  );
};

export default ProductImage;
