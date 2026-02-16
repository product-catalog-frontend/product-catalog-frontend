import type React from 'react';
import type { Product } from '../../types/Product/Product';
import { Icon } from '../common/Icon';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, name, price, screen, capacity, ram } = product;
  return (
    <article className="product-card">
      <a
        href="#!"
        className="product-card__link"
      >
        <img
          className="product-card__image"
          src={image}
          alt={name}
        />
        <p className="body-text">{name}</p>
      </a>
      <h3 className="product-card__price">{price}</h3>
      <div className="product-options">
        <div className="option">
          <span className="small-text">Screen</span>
          <span className="uppercase">{screen}</span>
        </div>
        <div className="option">
          <span className="small-text">Capacity</span>
          <span className="uppercase">{capacity}</span>
        </div>
        <div className="option">
          <span className="small-text">RAM</span>
          <span className="uppercase">{ram}</span>
        </div>
      </div>
      <div className="product-buttons">
        <button className="button-wishlist">
          <Icon
            name="heart"
            size={20}
          />
        </button>
      </div>
    </article>
  );
};
