import type { Product } from '../../types/product';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import styles from './ProductList.module.scss';

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};
