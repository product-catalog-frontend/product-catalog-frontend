import React from 'react';
import { useFavourites } from '../../context/FavouritesContext';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage: React.FC = () => {
  const { favourites } = useFavourites();

  return (
    <div className={styles.favoritesPage}>
      <h1>My Favourites</h1>

      {favourites.length === 0 ?
        <p className={styles.emptyMessage}>No favorites yet.</p>
      : <div className={styles.productsList}>
          {favourites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      }
    </div>
  );
};
