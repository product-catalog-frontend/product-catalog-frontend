import React from 'react';
import styles from './CartItem.module.scss';
import { Icon } from '../common/Icon';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <div className={styles.cartItem}>
      <button
        className={styles.cartItemRemove}
        onClick={() => onRemove(item.id)}
      >
        <Icon
          className={styles.removeIcon}
          name="close"
          size={20}
        />
      </button>

      <img
        src={item.image}
        alt={item.title}
        className={styles.cartItemImage}
      />

      <div className={styles.cartItemInfo}>
        <h3 className={styles.cartItemTitle}>{item.title}</h3>
      </div>

      <div className={styles.cartItemQuantity}>
        <button
          className={styles.quantityBtn}
          onClick={() => onDecrease(item.id)}
        >
          <Icon name="minus" />
        </button>

        <span className={styles.quantityValue}>{item.quantity}</span>

        <button
          className={styles.quantityBtn}
          onClick={() => onIncrease(item.id)}
        >
          <Icon name="plus" />
        </button>
      </div>

      <p className={styles.cartItemPrice}>${item.price}</p>
    </div>
  );
};
