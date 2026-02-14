/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface FavoritesContextType {
  favorites: unknown[];
  addToFavorite: (productId: string) => void;
  removeFromFavorite: (productId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites] = useState<unknown[]>([]);

  const addToFavorite = (productId: string) => {
    console.log('Add to favorites:', productId);
  };

  const removeFromFavorite = (productId: string) => {
    console.log('Remove from favorites:', productId);
  };

  const value: FavoritesContextType = {
    favorites,
    addToFavorite,
    removeFromFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider');
  }
  return context;
};
