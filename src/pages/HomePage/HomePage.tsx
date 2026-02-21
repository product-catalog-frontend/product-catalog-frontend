import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { BrandNewModelsCarousel } from '../../components/BrandNewModelsCarousel/BrandNewModelsCarousel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';
import { useProductStore } from '../../store/useProductStore';
import { useEffect } from 'react';

export const HomePage = () => {
  const products = useProductStore((state) => state.products);
  const discountProducts = useProductStore((state) => state.discountProducts);
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <ImageCarousel />
      <BrandNewModelsCarousel data={products} />
      <ShopByCategory data={products} />
      <HotPricesCarousel data={discountProducts} />
    </>
  );
};
