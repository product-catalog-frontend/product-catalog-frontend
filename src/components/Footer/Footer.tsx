import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../../public/img/logo/logo.svg';
import { Icon } from '../common/Icon';

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Contacts</NavLink>
          <NavLink to="#">Privacy</NavLink>
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
