import { create } from 'zustand';
import { getBrandNewProducts, getDiscountProducts, getProducts } from '../api/products';
import type { Product } from '../types/Product/Product';

interface ProductStore {
  products: Product[];
  discountProducts: Product[];
  brandNewProducts: Product[];
  mobilesCounter: number;
  tabletsCounter: number;
  accessoriesCounter: number;
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  discountProducts: [],
  brandNewProducts: [],
  mobilesCounter: 0,
  tabletsCounter: 0,
  accessoriesCounter: 0,
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    if (get().products.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const [products, discountProducts, brandNewProducts] = await Promise.all([
        getProducts(),
        getDiscountProducts(),
        getBrandNewProducts(),
      ]);

      const counters = products.reduce(
        (acc, product) => {
          if (product.category === 'phones') acc.mobiles++;
          if (product.category === 'tablets') acc.tablets++;
          if (product.category === 'accessories') acc.accessories++;

          return acc;
        },
        { mobiles: 0, tablets: 0, accessories: 0 },
      );
      set({
        products,
        discountProducts,
        brandNewProducts,
        mobilesCounter: counters.mobiles,
        tabletsCounter: counters.tablets,
        accessoriesCounter: counters.accessories,
        isLoading: false,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'Something went wrong', isLoading: false });
      }
    }
  },
}));
