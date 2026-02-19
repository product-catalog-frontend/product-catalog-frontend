import { Pagination } from '../../components/common/Pagination';
import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
  category: 'phones' | 'tablets' | 'accessories';
}

export const ProductsPage = ({ category }: ProductsPageProps) => {
  return (
    <div className={styles.productsPage}>
      <h1>{category}</h1>
      <Pagination
        pageCount={14}
        initialPage={1}
        visiblePages={4}
      />
    </div>
  );
};
