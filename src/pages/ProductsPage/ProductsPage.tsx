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
  const query = searchParams.get('query')?.toLowerCase() || '';

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (!category) return;
    getCatalogProducts({ category, page: 1, perPage: 'all', sort }).then(({ products }) => {
      setProducts(products);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [category, sort]);

  const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(query));

  const itemsPerPage = perPage === 'all' ? filteredProducts.length : Number(perPage);
  const pageCount = perPage === 'all' ? 1 : Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

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

      <p className={styles.count}>{filteredProducts.length} models</p>

      {filteredProducts.length > 0 ?
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

          <ProductList products={paginatedProducts} />

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
      : <p className={styles.noProducts}>
          There are no {category} matching &quot;{query}&quot;
        </p>
      }
    </div>
  );
};
