import { useState } from 'react';
import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { CartItem } from '../../components/CartItem/CartItem';
import type { CartItemType } from '../../components/CartItem/CartItem';

export const CartPage = () => {
  // ЗАГЛУШКА: Зараз це useState, але структура і назви функцій
  const [cart, setCart] = useState<CartItemType[]>([]);

  // Ці методи потім просто переїдуть у Zustand стор
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
      ),
    );
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.container}>
      <div className={styles.arrowButtonWrapper}>
        <ArrowButton
          text="Back"
          onClick={() => window.history.back()}
        />
      </div>

      <h1 className={styles.cartTitle}>Cart</h1>

      {cart.length === 0 ?
        <h2 className={styles.cartEmpty}>Your cart is empty</h2>
      : <div className={styles.cartPage}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={(id) => changeQuantity(id, 1)}
                onDecrease={(id) => changeQuantity(id, -1)}
              />
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.summaryInfo}>
              <p className={styles.totalAmount}>${totalAmount}</p>
              <p className={styles.totalItems}>
                Total for {totalQuantity} item{totalQuantity !== 1 ? 's' : ''}
              </p>
            </div>
            <PrimaryButton />
          </div>
        </div>
      }
    </div>
  );
};
