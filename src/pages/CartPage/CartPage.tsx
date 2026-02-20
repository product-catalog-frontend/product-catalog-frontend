import { useCartStore } from '../../store/useCartStore';
import type { Product } from '../../types/Product/Product';

export const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const changeQuantity = useCartStore((state) => state.changeQuantity);
  const totalItems = useCartStore((state) => state.totalItems());

  // Тимчасові продукти для тесту
  const demoProducts: Product[] = [
    {
      id: 1,
      itemId: 'p1',
      category: 'phones',
      name: 'iPhone 14',
      fullPrice: 1000,
      price: 900,
      screen: '6.1',
      capacity: '128GB',
      color: 'Black',
      ram: '6GB',
      year: 2023,
      image: '',
    },
    {
      id: 2,
      itemId: 'p2',
      category: 'phones',
      name: 'iPhone 14 Pro',
      fullPrice: 1200,
      price: 1100,
      screen: '6.1',
      capacity: '256GB',
      color: 'Silver',
      ram: '6GB',
      year: 2023,
      image: '',
    },
  ];

  return (
    <div>
      <h1>Cart Demo</h1>
      <p>Total items in cart: {totalItems}</p>

      <h2>Products:</h2>
      {demoProducts.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            style={{ marginBottom: '16px' }}
          >
            <span>{product.name}</span>

            <button
              onClick={() => addToCart(product)}
              style={{ marginLeft: '8px' }}
            >
              Add to Cart
            </button>

            {cartItem && (
              <span style={{ marginLeft: '16px' }}>
                <button onClick={() => changeQuantity(product.id, 'minus')}>-</button>
                <span style={{ margin: '0 8px' }}>{cartItem.quantity}</span>
                <button onClick={() => changeQuantity(product.id, 'plus')}>+</button>
                <button
                  onClick={() => removeItem(product.id)}
                  style={{ marginLeft: '8px' }}
                >
                  Remove
                </button>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
