import MainHeading from "./MainHeading";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { ProductData, Product } from "../../shared/ProductData";
import CustomButton from "../../shared/components/UIElements/CustomButton";

const Products = () => {
  const [products, setProducts] = useState<Product[]>(ProductData);
  return (
    <div className="products">
      <MainHeading
        title="Products"
        description="Order it for you or for your beloved ones"
      />
      <div className="container">
        {products.map((product) => (
          <ProductCard
            className="prod-card"
            prodId={product.id}
            image={product.prodImg}
            prodName={product.prodName}
            prodPrice={product.prodPrice}
          />
        ))}
        <CustomButton className="see-more-btn" name="See more" />
        {/* <ProductCard className='prod-card' image={candle_1} prodName="Spiced Mint" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_2} prodName="Sweet Straweberry" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_3} prodName="Cool Blueberries" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_4} prodName="Juicy Lemon" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_5} prodName="Product name" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_6} prodName="Fragrant Cinnamon" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_7} prodName="Summer Cherries" prodPrice="9.99$" />
            <ProductCard className='prod-card' image={candle_8} prodName="Clean Lavander" prodPrice="9.99$" /> */}
      </div>
    </div>
  );
};

export default Products;
