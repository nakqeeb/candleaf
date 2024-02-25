import { FC } from "react";
import "./ProductImage.css";
import useWindowDimensions from "../../shared/hooks/useWindowDimensions";

const ProductImage: FC<{ prodImg: string }> = ({ prodImg }) => {
  const { height, width } = useWindowDimensions();
  return (
    <div className="product-image">
      <img src={prodImg} alt="" />
      {width > 767 && (
        <>
          <p>
            All hand-made with natural soy wax, Candleaf is made for your
            pleasure moments.
          </p>
          <p>🚚 FREE SHIPPING</p>
        </>
      )}
    </div>
  );
};

export default ProductImage;
