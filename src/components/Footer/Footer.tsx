import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Icon } from '../common/Icon';
import { getCleanImagePath } from '../../utils/getCleanImagePath';

export const Footer: React.FC = () => {
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
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/privacy">Privacy</NavLink>
        </nav>

        <div className={styles.backToTop}>
          <span className={`small-text`}>Back to top</span>
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
