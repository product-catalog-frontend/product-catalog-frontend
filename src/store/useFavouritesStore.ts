import { create } from 'zustand';
import type { Product } from '../types/Product/Product';

interface FavouritesState {
  favourites: Product[];

  addToFavourites: (product: Product) => void;
  removeFromFavourites: (productId: number) => void;
  toggleFavourite: (product: Product) => void;
}

export const useFavouritesStore = create<FavouritesState>((set, get) => ({
  favourites: [],

  addToFavourites: (product) => {
    set((state) => {
      const exists = state.favourites.some((p) => p.id === product.id);
      if (exists) return state;

      return {
        favourites: [...state.favourites, product],
      };
    });
  },

  removeFromFavourites: (productId) => {
    set((state) => ({
      favourites: state.favourites.filter((p) => p.id !== productId),
    }));
  },

  toggleFavourite: (product) => {
    const { favourites } = get();
    const exists = favourites.some((p) => p.id === product.id);

    if (exists) {
      set({
        favourites: favourites.filter((p) => p.id !== product.id),
      });
    } else {
      set({
        favourites: [...favourites, product],
      });
    }
  },
}));
