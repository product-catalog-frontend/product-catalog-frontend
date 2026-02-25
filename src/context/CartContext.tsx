/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CartContextType {
  cart: unknown[];
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart] = useState<unknown[]>([]);

  const addToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const removeFromCart = (productId: string) => {
    console.log('Remove from cart:', productId);
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Винесемо хук в окремий файл щоб уникнути warning
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
