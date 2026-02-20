import { Link } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import { useProductStore } from '../../store/useProductStore';

export const ShopByCategory = () => {
  const mobilesCounter = useProductStore((state) => state.mobilesCounter);
  const tabletsCounter = useProductStore((state) => state.tabletsCounter);
  const accessoriesCounter = useProductStore((state) => state.accessoriesCounter);

  return (
    <article className={styles.categor}>
      <h2>Shop by category</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link
            to="/phones"
            className={styles.categoryLink}
          >
            <img
              src="img/category-phones.webp"
              alt="Category-phones"
              className={styles.categoryImage}
            />
          </Link>
          <h4>Mobile phones</h4>
          <p>{mobilesCounter} models</p>
        </div>
        <div className={styles.category}>
          <Link
            to="/tablets"
            className={styles.categoryLink}
          >
            <img
              src="img/category-tablets.png"
              alt="Category-tablets"
              className={styles.categoryImage}
            />
          </Link>
          <h4>Tablets</h4>
          <p>{tabletsCounter} models</p>
        </div>
        <div className={styles.category}>
          <Link
            to="/accessories"
            className={styles.categoryLink}
          >
            <img
              src="img/category-accessories.webp"
              alt="Category-accessories"
              className={styles.categoryImage}
            />
          </Link>
          <h4>Accessories</h4>
          <p>{accessoriesCounter} models</p>
        </div>
      </div>
    </article>
  );
};
