import { useEffect, useMemo } from 'react';
import { useSearchParams, useParams } from 'react-router-dom'; // Додано useParams
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
import type { Product } from '../../types/product';
import { ArrowButton } from '../../components/common/Buttons';

type Params = {
  category?: 'phones' | 'tablets' | 'accessories';
};

const SORT_OPTIONS = [
  { label: 'Newest', value: 'age' },
  { label: 'Alphabetically', value: 'title' },
  { label: 'Low to High', value: 'priceAsc' },
  { label: 'High to Low', value: 'priceDesc' },
];

const ITEMS_OPTIONS = ['4', '8', '16', 'all'];

const sortProducts = (products: Product[], sort: string): Product[] => {
  switch (sort) {
    case 'age':
      return [...products].sort((a, b) => b.year - a.year);
    case 'title':
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    case 'priceAsc':
      return [...products].sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export const ProductsPage = () => {
  const { category } = useParams<Params>();
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sort') || 'age';
  const perPage = searchParams.get('perPage') || 'all';
  const page = Number(searchParams.get('page')) || 1;

  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.delete('page');
      return prev;
    });
  }, [category, setSearchParams]);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === category),
    [products, category],
  );

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sort),
    [filteredProducts, sort],
  );

  const pageCount = perPage === 'all' ? 1 : Math.ceil(filteredProducts.length / Number(perPage));

  const visibleProducts = useMemo(() => {
    if (perPage === 'all') return sortedProducts;
    const perPageNum = Number(perPage);
    const start = (page - 1) * perPageNum;
    return sortedProducts.slice(start, start + perPageNum);
  }, [sortedProducts, perPage, page]);

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

  return (
    <div className={styles.productsPage}>
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

          <div className={styles.grid}>
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {perPage !== 'all' && pageCount > 1 && (
            <div className={styles.pagination}>
              <Pagination
                pageCount={pageCount}
                initialPage={page}
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
