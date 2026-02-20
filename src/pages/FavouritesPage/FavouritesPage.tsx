import React from 'react';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage: React.FC = () => {
  const { favourites } = useFavouritesStore();

  return (
    <div className={styles.favouritesPage}>
      <h1>My Favourites</h1>

      {favourites.length === 0 ?
        <div className={styles.emptyState}>
          <img
            src="/img/no-favourites.png"
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
