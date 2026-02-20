import { useState } from 'react';
import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { Icon } from '../../components/common/Icon';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartItem = {
  id: number;
  quantity: number;
  product: Product;
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

  const totalAmount = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

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
            <div
              key={item.id}
              className={styles.cartItem}
            >
              <button
                className={styles.cartItemRemove}
                onClick={() => removeItem(item.id)}
              >
                <Icon
                  className={styles.removeIcon}
                  name="close"
                  size={20}
                />
              </button>

              <img
                src={item.product.image}
                alt={item.product.title}
                className={styles.cartItemImage}
              />

              <div className={styles.cartItemInfo}>
                <h3 className={styles.cartItemTitle}>{item.product.title}</h3>
              </div>

              <div className={styles.cartItemQuantity}>
                <button
                  className={styles.quantityBtn}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <Icon name="minus" />
                </button>

                <span className={styles.quantityValue}>{item.quantity}</span>

                <button
                  className={styles.quantityBtn}
                  onClick={() => increaseQuantity(item.id)}
                >
                  <Icon name="plus" />
                </button>
              </div>

              <p className={styles.cartItemPrice}>${item.product.price}</p>
            </div>
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
