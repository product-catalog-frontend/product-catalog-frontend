/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../types/Product/Product';

interface FavouritesContextType {
  favourites: Product[];
  addToFavourite: (product: Product) => void;
  removeFromFavourite: (productId: number) => void;
  isFavourite: (productId: number) => boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<Product[]>(() => {
    const saved = localStorage.getItem('favourites');
    return saved ? JSON.parse(saved) : [];
  });

  const addToFavourite = (product: Product) => {
    setFavourites((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      const updated = [...prev, product];
      localStorage.setItem('favourites', JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromFavourite = (productId: number) => {
    setFavourites((prev) => {
      const updated = prev.filter((p) => p.id !== productId);
      localStorage.setItem('favourites', JSON.stringify(updated));
      return updated;
    });
  };

  const isFavourite = (productId: number) => {
    return favourites.some((p) => p.id === productId);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) throw new Error('useFavourites must be used within FavouritesProvider');
  return context;
};
