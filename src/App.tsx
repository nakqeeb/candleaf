import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./pages/Home";
import Footer from "./shared/components/Footer/Footer";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const location = useLocation();
  const { hash, pathname, search } = location;
  /* 
    - pathname: the part that comes after the domain name, e.g., /products.
    - search: the query string, e.g., ?id=5.
    - hash: the hash, e.g., #pricing.
  */
  let routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductInfo />} />
      <Route path="/cart" element={<Cart />} />
      {/* <Route path="/" element={<Users />} />
      <Route path="/:userId/places" element={<UserPlaces />} />
      <Route path="/places/new" element={<NewPlace />} />
      <Route path="/places/:placeId" element={<UpdatePlace />} />
      <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
  let checkoutRoute = (
    <Routes>
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
  return (
    <>
      {pathname === "/checkout" ? (
        checkoutRoute
      ) : (
        <>
          <MainNavigation />
          <main>{routes}</main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
