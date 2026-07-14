import { useCallback, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const initialState = { products: [], basketCount: 0, total: "0.00" };

export function useCart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback((product, sizeIndex) => {
    const selected = product.sizes[sizeIndex];
    if (!selected) return;

    dispatch({
      type: "ADD",
      payload: {
        name: product.name,
        description: product.description,
        picture: product.picture,
        size: selected.size,
        weight: selected.weight,
        price: selected.price,
      },
    });
  }, []);

  const changeProduct = useCallback((product, action) => {
    dispatch({ type: action, payload: product });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  return {
    productsInBasket: state.products,
    basketCount: state.basketCount,
    total: state.total,
    addToCart,
    changeProduct,
    clearCart,
  };
}
