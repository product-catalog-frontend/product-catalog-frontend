import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
  category: 'phones' | 'tablets' | 'accessories';
}

export const ProductsPage = ({ category }: ProductsPageProps) => {
  return (
    <div className={styles.productsPage}>
      <h1>{category}</h1>
    </div>
  );
};
