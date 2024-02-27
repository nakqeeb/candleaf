import { Product } from "../ProductData";

type CartProduct = Product & {
  quantity: number;
};

export default CartProduct;
