import type React from 'react';
import type { Product } from '../../types/Product/Product';

interface ProductCard {
  product: Product;
}

export const ProductCard: React.FC<ProductCard> = ({ product }) => {
  return (
    <div className="product-card">
      <a
        href="#!"
        className="product-card__link"
      >
        <img
          className="product-card__image"
          src={product.image}
          alt={product.name}
        />
      </a>
      <a
        href="#!"
        className="body-text"
      >
        {product.name}
      </a>
      <h3 className="product-card__price">{product.price}</h3>
      <div className="product-options">
        <div className="product-options__type">
          <p className="small-text">Screen</p>
          <p className="small-text">Capacity</p>
          <p className="small-text">RAM</p>
        </div>
        <div className="product-options__value">
          <p className="uppercase">{product.screen}</p>
          <p className="uppercase">{product.capacity}</p>
          <p className="uppercase">{product.ram}</p>
        </div>
      </div>
    </div>
  );
};
