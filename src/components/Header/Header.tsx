import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Icon } from '../common/Icon';
import { Link, NavLink } from 'react-router-dom';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useFavouritesStore } from '../../store/useFavouritesStore';
import { useCartStore } from '../../store/useCartStore';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import cn from 'classnames';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { favourites } = useFavouritesStore();
  const totalCartItems = useCartStore((state) => state.totalItems());

  const logo = getCleanImagePath('/img/logo.svg');

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/phones', label: 'Phones' },
    { to: '/tablets', label: 'Tablets' },
    { to: '/accessories', label: 'Accessories' },
  ];

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
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(styles.navLink, 'uppercase', {
                  [styles.active]: isActive,
                })
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.buttons}>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              cn(styles.iconButton, {
                [styles.activeIcon]: isActive,
              })
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
              cn(styles.iconButton, {
                [styles.activeIcon]: isActive,
              })
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
