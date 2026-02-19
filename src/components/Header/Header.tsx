import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../common/Icon';
import logo from '../../../public/img/logo/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useFavourites } from '../../context/FavouritesContext';

export const Header: React.FC<{ cartCount?: number }> = ({ cartCount = 1 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useFavourites();

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
            Home
          </NavLink>

          <NavLink
            to="/phones"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            Phones
          </NavLink>

          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            Tablets
          </NavLink>

          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
            }
          >
            Accessories
          </NavLink>
        </nav>

        <div className={styles.buttons}>
          <NavLink
            to="/favorites"
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

            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
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
        cartCount={cartCount}
      />
    </>
  );
};
