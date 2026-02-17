import type React from 'react';
import type { Product } from '../../types/Product/Product';
import { Icon } from '../common/Icon';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, screen, capacity, ram } = product;
  return (
    <article className={styles.card}>
      <a
        href="#!"
        className={styles.link}
      >
        <img
          className={styles.imageLink}
          src={image}
          alt={name}
        />
        <p className={`${styles.titleLink} body-text`}>{name}</p>
      </a>
      <h3 className={styles.price}>${price}</h3>
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
        <button className={styles.wishlistButton}>
          <Icon
            name="heart"
            size={20}
          />
        </button>
      </div>
    </article>
  );
};
