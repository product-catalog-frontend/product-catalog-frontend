import { useState } from 'react';
import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { CartItem } from '../../components/CartItem/CartItem';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};
export const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  function removeItem(id: number) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)),
    );
  }

  function decreaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  }

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return <h2 className={styles.cartEmpty}>CART IS EMPTY</h2>;
  }

  return (
    <>
      <div className={styles.arrowButtonWrapper}>
        <ArrowButton text="Back" />
      </div>

      <h1 className={styles.cartTitle}>Cart</h1>

      <div className={styles.cartPage}>
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeItem}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          ))}
        </div>

        <div className={styles.cartSummary}>
          <p className={styles.totalAmount}>${totalAmount}</p>

          <p className={styles.totalItems}>
            Total for {totalQuantity} item
            {totalQuantity > 1 ? 's' : ''}
          </p>

          <PrimaryButton />
        </div>
      </div>
    </>
  );
};
