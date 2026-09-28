"use client";

import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
// add
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
// remove
const removeFromCart = (id) => {
  setCart((prevCart) =>
    prevCart.filter((product) => product.id !== id)
  );
};
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;