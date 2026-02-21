import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../types/Product/Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (productId: number) => void;
  changeQuantity: (productId: number, action: 'plus' | 'minus') => void;
  clearCart: () => void;
  totalItems: () => number;
  totalAmount: () => number;
  isInCart: (productId: number) => boolean;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existingItem = get().cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }],
          });
        }
      },

      removeItem: (productId) => {
        set({
          cart: get().cart.filter((item) => item.id !== productId),
        });
      },

      changeQuantity(productId, action) {
        const currentItem = get().cart.find((item) => item.id === productId);

        if (!currentItem) return;

        if (action === 'minus' && currentItem.quantity === 1) {
          get().removeItem(productId);
          return;
        }

        set({
          cart: get().cart.map((item) =>
            item.id === productId ?
              {
                ...item,
                quantity: action === 'plus' ? item.quantity + 1 : item.quantity - 1,
              }
            : item,
          ),
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      totalItems: () => {
        return get().cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      totalAmount: () => {
        return get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      },

      isInCart: (productId) => {
        return get().cart.some((item) => item.id === productId);
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);
