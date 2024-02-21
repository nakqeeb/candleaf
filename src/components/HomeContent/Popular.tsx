import MainHeading from "./MainHeading";
import "./Popular.css";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { Product, ProductData } from "../../shared/ProductData";
const Popular = () => {
  const [products, setProducts] = useState<Product[]>(ProductData);
  return (
    <div className="popular">
      <MainHeading
        title="Popular"
        description="Our top selling product that you may like"
      />
      <div className="container">
        {products.map(
          (product) =>
            product.totalSold! >= 100 && (
              <ProductCard
                className="prod-card"
                prodId={product.id}
                image={product.prodImg}
                prodName={product.prodName}
                prodPrice={product.prodPrice}
              />
            )
        )}
        {/* <ProductCard className='prod-card' image={candle_1} prodName="Spiced Mint" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_2} prodName="Sweet Straweberry" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_3} prodName="Cool Blueberries" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_4} prodName="Juicy Lemon" prodPrice="9.99$" /> */}
      </div>
    </div>
  );
};

export default Popular;
