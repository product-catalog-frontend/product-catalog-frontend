import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CartProvider } from './context/CartContext';
import { FavouritesProvider } from './context/FavouritesContext';
import styles from './App.module.scss';

export const App = () => {
  return (
    <CartProvider>
      <FavouritesProvider>
        <div className={styles.app}>
          <Header />

          <main className={styles.main}>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/phones"
                element={<ProductsPage category="phones" />}
              />
              <Route
                path="/tablets"
                element={<ProductsPage category="tablets" />}
              />
              <Route
                path="/accessories"
                element={<ProductsPage category="accessories" />}
              />
              <Route
                path="/product/:productId"
                element={<ProductDetailsPage />}
              />
              <Route
                path="/cart"
                element={<CartPage />}
              />
              <Route
                path="/favorites"
                element={<FavouritesPage />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </FavouritesProvider>
    </CartProvider>
  );
};
