import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CartProduct from "./CartProduct";

export interface CartState {
  cart: CartProduct[];
}
interface IncreaseQuantityPayload {
  id: string;
}

interface DecreaseQuantityPayload {
  id: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] } as CartState,
  reducers: {
    // addToCart: (state, action) => {
    //   const itemInCart = state.cart.find(
    //     (item) => item.id === action.payload.id
    //   );
    //   if (itemInCart) {
    //     if (state.quantity === 0 || state.quantity === 1) {
    //       if (itemInCart.quantity !== undefined) {
    //         itemInCart.quantity++;
    //       }
    //     } else {
    //       if (itemInCart.quantity !== undefined) {
    //         itemInCart.quantity = itemInCart.quantity + state.quantity;
    //       }
    //     }
    //   } else {
    //     if (state.quantity === 0 || state.quantity === 1) {
    //       state.cart.push({ ...action.payload, quantity: 1 });
    //     } else {
    //       state.cart.push({ ...action.payload, quantity: state.quantity });
    //     }
    //   }
    // },
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        if (itemInCart.quantity !== undefined) {
          if (action.payload.quantity === 0) {
            itemInCart.quantity++;
          } else {
            itemInCart.quantity = itemInCart.quantity + action.payload.quantity;
          }
        }
      } else {
        console.log(action.payload);
        //   state.cart.push({ ...action.payload, quantity: 1 });
        state.cart.push({
          ...action.payload,
          quantity: action.payload.quantity > 0 ? action.payload.quantity : 1,
        });
      }
    },

    increaseQuantity: (
      state,
      action: PayloadAction<IncreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },
    decreaseQuantity: (
      state,
      action: PayloadAction<DecreaseQuantityPayload>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
