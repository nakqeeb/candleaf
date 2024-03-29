import { useEffect, useState } from "react";
import { Product, ProductData } from "../shared/ProductData";
import { useParams } from "react-router-dom";
import ProductContent from "../components/ProductInfoContent/ProductContent";

const ProductInfoPage = () => {
  const [products, setProducts] = useState<Product[]>(ProductData);
  const [product, setProduct] = useState<any>();
  const productId = useParams().productId;
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to the top of the page when render the page
  }, [])
  useEffect(() => {
    setProduct(products.find((prod) => prod.id === productId));
  }, [productId, products]);
  return (
    <ProductContent
      id={product?.id}
      prodName={product?.prodName}
      prodImg={product?.prodImg}
      prodPrice={product?.prodPrice}
    />
  );
};

export default ProductInfoPage;
