import styles from './CartPage.module.scss';
import { PrimaryButton, ArrowButton } from '../../components/common/Buttons';
import { CartItem } from '../../components/CartItem/CartItem';
import { useCartStore } from '../../store/useCartStore';
import { useTranslation } from 'react-i18next';

export const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const totalAmount = useCartStore((state) => state.totalAmount());
  const totalItems = useCartStore((state) => state.totalItems());
  const clearCart = useCartStore((state) => state.clearCart);
  const { t } = useTranslation();

  const handleCheckout = () => {
    clearCart();
  };

  return (
    <div className={styles.container}>
      <div className={styles.arrowButtonWrapper}>
        <ArrowButton
          text="Back"
          back
        />
      </div>

      <h1 className={styles.cartTitle}>{t('cart.title')}</h1>

      {cart.length === 0 ?
        <h2 className={styles.cartEmpty}>{t('cart.empty')}</h2>
      : <div className={styles.cartPage}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={(id) => changeQuantity(id, 'increase')}
                onDecrease={(id) => changeQuantity(id, 'decrease')}
              />
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.summaryInfo}>
              <p className={styles.totalAmount}>${totalAmount}</p>
              <p className={styles.totalItems}>{t('cart.total', { count: totalItems })}</p>
            </div>
            <PrimaryButton onClick={handleCheckout}>{t('cart.checkout')}</PrimaryButton>
          </div>
        </div>
      }
    </div>
  );
};
