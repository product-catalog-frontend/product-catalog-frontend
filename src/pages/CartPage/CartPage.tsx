import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { CartItem } from '../../components/CartItem/CartItem';
import { useCartStore } from '../../store/useCartStore';

export const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const totalAmount = useCartStore((state) => state.totalAmount());
  const totalItems = useCartStore((state) => state.totalItems());
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    clearCart();
  };

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
                onIncrease={(id) => changeQuantity(id, 'plus')}
                onDecrease={(id) => changeQuantity(id, 'minus')}
              />
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.summaryInfo}>
              <p className={styles.totalAmount}>${totalAmount}</p>
              <p className={styles.totalItems}>
                Total for {totalItems} item{totalItems !== 1 ? 's' : ''}
              </p>
            </div>
            <PrimaryButton onClick={handleCheckout}>Checkout</PrimaryButton>
          </div>
        </div>
      }
    </div>
  );
};
