import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';
import { Icon } from '../../common/Icon';
import { LanguageSwitcher } from '../../common/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
          {t('nav.home')}
        </NavLink>

        <NavLink
          to="/phones"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          {t('nav.phones')}
        </NavLink>

        <NavLink
          to="/tablets"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          {t('nav.tablets')}
        </NavLink>

        <NavLink
          to="/accessories"
          className={({ isActive }) =>
            `${styles.navLink} uppercase ${isActive ? styles.active : ''}`
          }
          onClick={onClose}
        >
          {t('nav.accessories')}
        </NavLink>
      </nav>

      <div className={styles.bottom}>
        <div className={styles.bottomButton}>
          <LanguageSwitcher />
        </div>

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
