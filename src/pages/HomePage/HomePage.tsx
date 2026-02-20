import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { BrandNewModelsCarousel } from '../../components/BrandNewModelsCarousel/BrandNewModelsCarousel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';
import { useProductStore } from '../../store/useProductStore';

export const HomePage = () => {
  const { products } = useProductStore();
  return (
    <>
      <ImageCarousel />
      <BrandNewModelsCarousel data={products} />
      <ShopByCategory data={products} />
      <HotPricesCarousel data={products} />
    </>
  );
};
