import { create } from 'zustand';
import { getProducts } from '../api/products';
import type { Product } from '../types/product';

interface ProductStore {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  getProductByItemId: (itemId: string) => Product | null;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    if (get().products.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const products = await getProducts();
      set({ products, isLoading: false });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'Something went wrong', isLoading: false });
      }
    }
  },

  getProductByItemId: (itemId: string) => {
    const { products } = get();
    return products.find((product) => product.itemId === itemId) || null;
  },
}));
