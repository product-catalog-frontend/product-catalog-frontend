import { ImageCarousel } from '../../components/ImageCarousel/ImageCarousel';
import { BrandNewModelsCarousel } from '../../components/BrandNewModelsCarousel/BrandNewModelsCarousel';
import { ShopByCategory } from '../../components/ShopByCategory/ShopByCategory';
import { HotPricesCarousel } from '../../components/HotPricesCarousel/HotPricesCarousel';

export const HomePage = () => {
  return (
    <div className="p-5 max-w-[1200px] mx-auto">
      <ImageCarousel />
      <BrandNewModelsCarousel data={data} />
      <ShopByCategory data={data} />
      <HotPricesCarousel data={data} />
    </div>
  );
};
