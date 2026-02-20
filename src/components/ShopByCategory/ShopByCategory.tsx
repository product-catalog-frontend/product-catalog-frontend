import { Link } from 'react-router-dom';
import styles from './ShopByCategory.module.scss';
import type { Product } from '../../types/Product/Product';

interface Props {
  data: Product[];
}

export const ShopByCategory = ({ data }: Props) => {
  const mobilesCounter = data.filter((product) => product.category === 'phones').length;
  const tabletesCounter = data.filter((product) => product.category === 'tablets').length;
  const accessoriesCounter = data.filter((product) => product.category === 'accessories').length;

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
          <p>{tabletesCounter} models</p>
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
