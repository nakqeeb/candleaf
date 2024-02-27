import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer }, // the key could be any name and its value should be the reducer slice.
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
