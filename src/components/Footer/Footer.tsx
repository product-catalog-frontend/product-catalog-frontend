import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Icon } from '../common/Icon';
import { getCleanImagePath } from '../../utils/getCleanImagePath';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const logo = getCleanImagePath('/img/logo.svg');

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link
          to="/"
          className={styles.logo}
        >
          <img
            src={logo}
            alt="NiceGadgets"
          />
        </Link>

        <nav className={`${styles.links} uppercase`}>
          <NavLink
            to="/about"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.about')}
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.contacts')}
          </NavLink>

          <NavLink
            to="/privacy"
            className={({ isActive }) => `${isActive ? styles.active : ''}`}
          >
            {t('footer.privacy')}
          </NavLink>
        </nav>

        <div className={styles.backToTop}>
          <span className={`small-text`}>{t('footer.backToTop')}</span>
          <button
            onClick={handleBackToTop}
            className={styles.topButton}
          >
            <Icon
              name="chevronUp"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
