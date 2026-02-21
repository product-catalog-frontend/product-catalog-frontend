import { useEffect, useState } from 'react';
import { useProductStore } from '../../store/useProductStore';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../../components/common/DropdownMenu/DropdownMenu';
import { Pagination } from '../../components/common/Pagination';
import styles from './ProductsPage.module.scss';

interface ProductsPageProps {
  category: 'phones' | 'tablets' | 'accessories';
}

const SORT_OPTIONS = ['Newest', 'Alphabetically', 'Cheapest'];
const ITEMS_OPTIONS = ['4', '8', '16'];

export const ProductsPage = ({ category }: ProductsPageProps) => {
  const [sortBy, setSortBy] = useState('Newest');
  const [itemsOnPage, setItemsOnPage] = useState('16');

  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className={styles.productsPage}>
      <h1 className={styles.title}>{category}</h1>
      <p className={styles.count}>{filteredProducts.length} models</p>

      <div className={styles.controls}>
        <div className={styles.control}>
          <span className={styles.controlLabel}>Sort by</span>
          <Dropdown>
            <DropdownTrigger>{sortBy}</DropdownTrigger>
            <DropdownContent>
              {SORT_OPTIONS.map((option) => (
                <DropdownItem
                  key={option}
                  onSelect={() => setSortBy(option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </div>

        <div className={styles.control}>
          <span className={styles.controlLabel}>Items on page</span>
          <Dropdown>
            <DropdownTrigger>{itemsOnPage}</DropdownTrigger>
            <DropdownContent>
              {ITEMS_OPTIONS.map((option) => (
                <DropdownItem
                  key={option}
                  onSelect={() => setItemsOnPage(option)}
                >
                  {option}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </div>
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination
          pageCount={Math.ceil(filteredProducts.length / Number(itemsOnPage))}
          initialPage={1}
          visiblePages={4}
        />
      </div>
    </div>
  );
};
