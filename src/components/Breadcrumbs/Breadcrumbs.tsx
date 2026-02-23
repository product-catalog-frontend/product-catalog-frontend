import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../common/Icon';
import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  categoryName: string;
  productName?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ categoryName, productName }) => {
  return (
    <nav
      className={styles.breadcrumbs}
      aria-label="Breadcrumb"
    >
      <Link
        to="/"
        className={styles.home}
      >
        <Icon
          name="home"
          strokeWidth={2}
        />
      </Link>

      {categoryName && (
        <>
          <Icon
            name="chevronRight"
            strokeWidth={2}
            className={styles.separator}
          />

          {productName ?
            <Link
              to={`/${categoryName.toLowerCase()}`}
              className={styles.link}
            >
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Link>
          : <span className={styles.current}>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </span>
          }
        </>
      )}

      {productName && (
        <>
          <Icon
            name="chevronRight"
            strokeWidth={2}
            className={styles.separator}
          />
          <span className={styles.current}>{productName}</span>
        </>
      )}
    </nav>
  );
};
