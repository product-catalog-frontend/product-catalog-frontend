import type React from 'react';
import type { Product } from '../../types/Product/Product';
import styles from './ProductCard.module.scss';
import { HeartButton, PrimaryButton } from '../common/Buttons';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { getCleanImagePath } from '../../utils/getCleanImagePath';

interface ProductCardProps {
  product: Product;
  showFullPrice?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, showFullPrice = false }) => {
  const { image, name, price, screen, capacity, ram, fullPrice } = product;

  const { favourites, toggleFavourite } = useFavouritesStore();

  const isFavourite = favourites.some((item) => item.id === product.id);

  const handleFavouriteClick = () => {
    toggleFavourite(product);
  };

  return (
    <article className={styles.card}>
      <a
        href="#!"
        className={styles.link}
      >
        <img
          className={styles.imageLink}
          src={getCleanImagePath(image)}
          alt={name}
        />
        <p className={`${styles.titleLink} body-text`}>{name}</p>
      </a>
      <div className={styles.prices}>
        <h3 className={styles.realPrice}>${price}</h3>
        {showFullPrice && <h3 className={styles.price}>${fullPrice}</h3>}
      </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>Screen</span>
          <span className={`${styles.value} uppercase`}>{screen}</span>
        </div>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>Capacity</span>
          <span className={`${styles.value} uppercase`}>{capacity}</span>
        </div>
        <div className={styles.option}>
          <span className={`${styles.label} small-text`}>RAM</span>
          <span className={`${styles.value} uppercase`}>{ram}</span>
        </div>
      </div>
      <div className={styles.buttons}>
        <PrimaryButton />
        <HeartButton
          selected={isFavourite}
          onClick={handleFavouriteClick}
        />
      </div>
    </article>
  );
};
