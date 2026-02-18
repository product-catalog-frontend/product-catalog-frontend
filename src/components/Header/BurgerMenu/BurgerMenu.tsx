import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Icon } from '../../common/Icon';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  favouritesCount: number | undefined;
  cartCount: number | undefined;
};

export const BurgerMenu: React.FC<Props> = ({
  isOpen,
  onClose,
  favouritesCount = 0,
  cartCount = 0,
}) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          Home
        </NavLink>

        <NavLink
          to="/phones"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          Phones
        </NavLink>

        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          Tablets
        </NavLink>

        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          Accessories
        </NavLink>
      </nav>

      <div className={styles.bottom}>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${styles.bottomButton} ${isActive ? styles.activeIcon : ''}`
          }
          onClick={onClose}
        >
          <div className={styles.iconWrapper}>
            <Icon name="heart" />
            {favouritesCount > 0 && <span className={styles.badge}>{favouritesCount}</span>}
          </div>
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `${styles.bottomButton} ${isActive ? styles.activeIcon : ''}`
          }
          onClick={onClose}
        >
          <div className={styles.iconWrapper}>
            <Icon name="bag" />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};
