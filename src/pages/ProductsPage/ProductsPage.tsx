import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../../components/common/DropdownMenu/DropdownMenu';
import { Pagination } from '../../components/common/Pagination';
import styles from './ProductsPage.module.scss';
import { ArrowButton } from '../../components/common/Buttons';
import { NotFoundPage } from '../NotFoundPage/NotFoundPage';
import { ProductList } from '../ProductList/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { getCatalogProducts } from '../../api/products';
import type { Product } from '../../types/product';

type CategoryParam = {
  category?: 'phones' | 'tablets' | 'accessories';
};

const SORT_OPTIONS = [
  { label: 'Newest', value: 'age' },
  { label: 'Alphabetically', value: 'title' },
  { label: 'Low to High', value: 'priceAsc' },
  { label: 'High to Low', value: 'priceDesc' },
];

const ITEMS_OPTIONS = ['4', '8', '16', 'all'];

export const ProductsPage = () => {
  const { category } = useParams<CategoryParam>();
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'age';
  const perPage = searchParams.get('perPage') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCatalogProducts({ category, page, perPage, sort }).then(({ products, total }) => {
      setProducts(products);
      setTotal(total);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }, [category, page, perPage, sort]);

  const pageCount = perPage === 'all' ? 1 : Math.ceil(total / Number(perPage)) || 1;

  const currentSortLabel = SORT_OPTIONS.find((option) => option.value === sort)?.label || 'Newest';

  const handleSortChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('sort', value);
      prev.delete('page');
      return prev;
    });
  };

  const handlePerPageChange = (value: string) => {
    setSearchParams((prev) => {
      if (value === 'all') {
        prev.delete('perPage');
      } else {
        prev.set('perPage', value);
      }
      prev.delete('page');
      return prev;
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams((prev) => {
      if (newPage === 1) {
        prev.delete('page');
      } else {
        prev.set('page', String(newPage));
      }
      return prev;
    });
  };

  if (!['phones', 'tablets', 'accessories'].includes(category as string)) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.productsPage}>
      {category && <Breadcrumbs categoryName={category} />}

      <ArrowButton
        text="Back"
        back
      />

      <h1 className={styles.title}>
        {category === 'phones' && 'Mobile phones'}
        {category === 'tablets' && 'Tablets'}
        {category === 'accessories' && 'Accessories'}
      </h1>
      <p className={styles.count}>{total} models</p>

      {total !== 0 ?
        <>
          <div className={styles.controls}>
            <div className={styles.control}>
              <span className={styles.controlLabel}>Sort by</span>
              <Dropdown>
                <DropdownTrigger>{currentSortLabel}</DropdownTrigger>
                <DropdownContent>
                  {SORT_OPTIONS.map((option) => (
                    <DropdownItem
                      key={option.value}
                      onSelect={() => handleSortChange(option.value)}
                    >
                      {option.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>

            <div className={styles.control}>
              <span className={styles.controlLabel}>Items on page</span>
              <Dropdown>
                <DropdownTrigger>{perPage}</DropdownTrigger>
                <DropdownContent>
                  {ITEMS_OPTIONS.map((option) => (
                    <DropdownItem
                      key={option}
                      onSelect={() => handlePerPageChange(option)}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>
          </div>

          <ProductList products={products} />

          {perPage !== 'all' && pageCount > 1 && (
            <div className={styles.pagination}>
              <Pagination
                pageCount={pageCount}
                currentPage={page}
                visiblePages={4}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </>
      : <p className={styles.noProducts}>No products found in this category.</p>}
    </div>
  );
};
