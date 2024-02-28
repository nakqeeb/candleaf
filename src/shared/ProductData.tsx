import candle_1 from "../assets/images/candle-1.png";
import candle_2 from "../assets/images/candle-2.png";
import candle_3 from "../assets/images/candle-3.png";
import candle_4 from "../assets/images/candle-4.png";
import candle_5 from "../assets/images/candle-5.png";
import candle_6 from "../assets/images/candle-6.png";
import candle_7 from "../assets/images/candle-7.png";
import candle_8 from "../assets/images/candle-8.png";
export interface Product {
  id: string;
  prodName: string;
  prodPrice: number;
  prodImg: string;
  totalSold?: number;
}
export const ProductData = [
  {
    id: "c1",
    prodName: "Spiced Mint",
    prodPrice: 7.99,
    prodImg: candle_1,
    totalSold: 100,
  },
  {
    id: "c2",
    prodName: "Sweet Straweberry",
    prodPrice: 9.99,
    prodImg: candle_2,
    totalSold: 120,
  },
  {
    id: "c3",
    prodName: "Cool Blueberries",
    prodPrice: 12.99,
    prodImg: candle_3,
    totalSold: 136,
  },
  {
    id: "c4",
    prodName: "Juicy Lemon",
    prodPrice: 8.99,
    prodImg: candle_4,
    totalSold: 276,
  },
  {
    id: "c5",
    prodName: "Fragrant Rose",
    prodPrice: 10.99,
    prodImg: candle_5,
    totalSold: 56,
  },
  {
    id: "c6",
    prodName: "Fragrant Cinnamon",
    prodPrice: 9.99,
    prodImg: candle_6,
    totalSold: 76,
  },
  {
    id: "c7",
    prodName: "Summer Cherries",
    prodPrice: 8.99,
    prodImg: candle_7,
    totalSold: 87,
  },
  {
    id: "c8",
    prodName: "Clean Lavander",
    prodPrice: 7.99,
    prodImg: candle_8,
    totalSold: 12,
  },
];
