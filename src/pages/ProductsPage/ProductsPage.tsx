import { useState } from 'react';
import type { Product } from '../../types/Product/Product';
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

const testProduct: Product = {
  id: 1,
  category: 'phones',
  itemId: 'apple-iphone-xr-64gb-silver',
  name: 'Apple iPhone XR 64GB Silver',
  fullPrice: 899,
  price: 799,
  screen: '6.1" IPS',
  capacity: '64GB',
  color: 'silver',
  ram: '3GB',
  year: 2019,
  image: 'https://placehold.co/200x300',
};

const SORT_OPTIONS = ['Newest', 'Alphabetically', 'Cheapest'];
const ITEMS_OPTIONS = ['4', '8', '16'];

export const ProductsPage = ({ category }: ProductsPageProps) => {
  const [sortBy, setSortBy] = useState('Newest');
  const [itemsOnPage, setItemsOnPage] = useState('16');

  return (
    <div className={styles.productsPage}>
      <h1 className={styles.title}>{category}</h1>
      <p className={styles.count}>95 models</p>

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
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
        <ProductCard product={testProduct} />
      </div>
      <div className={styles.pagination}>
        <Pagination
          pageCount={14}
          initialPage={1}
          visiblePages={4}
        />
      </div>
    </div>
  );
};
