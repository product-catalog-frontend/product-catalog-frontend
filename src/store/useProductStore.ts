import { create } from 'zustand';
import { getDiscountProducts, getProducts } from '../api/products';
import type { Product } from '../types/Product/Product';

interface ProductStore {
  products: Product[];
  discountProducts: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  discountProducts: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    if (get().products.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const [products, discountProducts] = await Promise.all([
        getProducts(),
        getDiscountProducts(),
      ]);
      set({ products, discountProducts, isLoading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'Something went wrong', isLoading: false });
      }
    }
  },
}));
