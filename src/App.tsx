import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { About } from './pages/AboutPage/About';
import { Contacts } from './pages/ContactsPage/Contacts';
import { Privacy } from './pages/PrivacyPage/Privacy';
import { NotFoundPage } from './pages/NotFoundPage';
import styles from './App.module.scss';
import { useEffect } from 'react';
import { useProductStore } from './store/useProductStore';

export const App = () => {
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/:category"
            element={<ProductsPage />}
          />
          <Route
            path="/:category/:productId"
            element={<ProductDetailsPage />}
          />
          <Route
            path="/cart"
            element={<CartPage />}
          />
          <Route
            path="/favourites"
            element={<FavouritesPage />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/contacts"
            element={<Contacts />}
          />
          <Route
            path="/privacy"
            element={<Privacy />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
