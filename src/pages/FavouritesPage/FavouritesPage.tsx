import React from 'react';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { getCleanImagePath } from '../../utils/getCleanImagePath';

import styles from './FavouritesPage.module.scss';

export const FavouritesPage: React.FC = () => {
  const favourites = useFavouritesStore((state) => state.favourites);
  const isEmpty = favourites.length === 0;

  return (
    <div className={styles.favouritesPage}>
      <h1>My Favourites</h1>

      {isEmpty ?
        <div className={styles.emptyState}>
          <img
            src={getCleanImagePath('favourites-is-empty.png')}
            alt="No favourites"
            className={styles.emptyImage}
          />

          <p className={styles.emptyMessage}>Your favourites list is empty.</p>
        </div>
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
