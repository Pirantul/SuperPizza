import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Basket from "./components/basket/Basket";
import { useCart } from "./hooks/useCart";

export default function App() {
  const {
    productsInBasket,
    basketCount,
    total,
    addToCart,
    changeProduct,
    clearCart,
  } = useCart();

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home basketCount={basketCount} onAddToCart={addToCart} />}
        />
        <Route
          path="/basket"
          element={
            <Basket
              total={total}
              basketCount={basketCount}
              productsInBasket={productsInBasket}
              onChangeProduct={changeProduct}
              onClearCart={clearCart}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}
