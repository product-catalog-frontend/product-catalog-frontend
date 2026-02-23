import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../common/Icon';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useFavouritesStore();
  const totalCartItems = useCartStore((state) => state.totalItems());
  const { t } = useTranslation();

  const logo = getCleanImagePath('/img/logo.svg');

  return (
    <>
      <header className={styles.header}>
        <Link
          to="/"
          className={styles.logoContainer}
        >
          <img
            src={logo}
            alt="NiceGadgets"
          />
        </Link>

        <nav className={styles.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            {t('nav.home')}
          </NavLink>

          <NavLink
            to="/phones"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            {t('nav.phones')}
          </NavLink>

          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            {t('nav.tablets')}
          </NavLink>

          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            {t('nav.accessories')}
          </NavLink>
        </nav>

        <div className={styles.buttons}>
          <div className={styles.iconButton}>
            <LanguageSwitcher />
          </div>

          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              `${styles.iconButton} ${isActive ? styles.activeIcon : ''}`
            }
          >
            <Icon
              name="heart"
              strokeWidth={2}
            />

            {favourites.length > 0 && <span className={styles.badge}>{favourites.length}</span>}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.iconButton} ${isActive ? styles.activeIcon : ''}`
            }
          >
            <Icon
              name="bag"
              strokeWidth={2}
            />

            {totalCartItems > 0 && <span className={styles.badge}>{totalCartItems}</span>}
          </NavLink>
        </div>

        <button
          className={styles.burger}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Icon
            name={isMenuOpen ? 'close' : 'menu'}
            strokeWidth={2}
          />
        </button>
      </header>

      <BurgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        favouritesCount={favourites.length}
        cartCount={totalCartItems}
      />
    </>
  );
};
