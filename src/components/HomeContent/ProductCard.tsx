import { FC } from "react";
import "./ProductCard.css";
import { NavLink } from "react-router-dom";
const ProductCard: FC<{
  prodId: string;
  image: string;
  prodName: string;
  prodPrice: string;
  className?: string;
}> = ({ prodId, image, prodName, prodPrice, className }) => {
  return (
    <NavLink className="link" to={`product/${prodId}`}>
      <div className={`${className} box`}>
        <img src={image} alt="" />
        <div className="info">
          <p className="prod-name">{prodName}</p>
          <p className="prod-price">{prodPrice}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
